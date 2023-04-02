function juiceFlavours(arr){

    let juices = {};
    let bottles = {};

    for (const line of arr) {
        let[juiceName, juiceQuantity] =  line.split(' => ');
        if(!juices.hasOwnProperty(juiceName)){
            juices[juiceName] = 0;
        }
        juices[juiceName] += Number(juiceQuantity);
        
        if(juices[juiceName] >= 1000){
            let bottlesNumber = Math.floor(juices[juiceName] / 1000);
            
            if(!bottles.hasOwnProperty(juiceName)){
                bottles[juiceName] = 0;
            } 
            bottles[juiceName] += Number(bottlesNumber);
            juices[juiceName] -= Number(bottlesNumber * 1000);
        }
        
        
    }
    Object.entries(bottles).forEach((bottle) => console.log(`${bottle[0]} => ${bottle[1]}`));




} juiceFlavours(['Orange => 2000',
'Peach => 1432',
'Banana => 450',
'Peach => 600',
'Strawberry => 549'])