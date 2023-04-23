class WineSelection{
    constructor(space){
        this.space = space;
        this.wines = [];
        this.bill = 0;
    }


    reserveABottle (wineName, wineType, price){
        if(this.wines.length === this.space){
            throw new Error("Not enough space in the cellar.");
        }

        this.wines.push({wineName, wineType, price, paid: false})
        return `You reserved a bottle of ${wineName} ${wineType} wine.`
    }

    payWineBottle( wineName, price ){
        let foundWine = this.wines.find(x => x.wineName === wineName);
     
        if(!foundWine){
            throw new Error(`${wineName} is not in the cellar.`);
        }

        if(foundWine.paid){
            throw new Error(`${wineName} has already been paid.`)
        } 

        foundWine.paid = true;
        this.bill += foundWine.price;
        return `You bought a ${wineName} for a ${price}$.`

    }

    openBottle(wineName){
        let foundWine = this.wines.find(x => x.wineName === wineName);

        if(!foundWine){
            throw new Error("The wine, you're looking for, is not found.")
        }

        if(!foundWine.paid){
            throw new Error(`${wineName} need to be paid before open the bottle.`);
        }
        
        this.wines.splice(foundWine, 1);
        return `You drank a bottle of ${wineName}.`

    }


    cellarRevision(wineType){
        const result = [];  
        if(!wineType){
            let emptySlots = this.space - this.wines.length;
            result.push(`You have space for ${emptySlots} bottles more.`);
            result.push(`You paid ${this.bill}$ for the wine.`);

            this.wines.sort((a,b) => a.wineName.localeCompare(b.wineName));

            for (const wine of this.wines) {
                let ifPaid = '';
                if(wine.paid){
                    ifPaid = 'Has Paid'
                } else {
                    ifPaid = 'Not Paid'
                }
                result.push(`${wine.wineName} > ${wine.wineType} - ${ifPaid}.`);
            }
            return result.join('\n')


        } else {
            let foundWineType = this.wines.filter(x => x.wineType === wineType);
           
            if(foundWineType.length == 0){
                throw new Error(`There is no ${wineType} in the cellar.`);
            } else {
                for (const wine of foundWineType) {
                    let paid = '';
                    if(wine.paid){
                        paid = 'Has Paid';
                    } else {
                        paid = 'Not Paid'
                    }
                    result.push( `${wine.wineName} > ${wine.wineType} - ${paid}.`)
                    
                }
            }

        }
        return result.join('\n');


    }







}

const selection = new WineSelection(5)
selection.reserveABottle('Bodegas Godelia Mencía', 'Rose', 144);
selection.payWineBottle('Bodegas Godelia Mencía', 144);
selection.reserveABottle('Sauvignon Blanc Marlborough', 'White', 50);
selection.reserveABottle('Cabernet Sauvignon Napa Valley', 'Red', 120);
console.log(selection.cellarRevision());


