
const movieTheater = require('./movietheathre');
const { expect } =  require('chai');


describe("Tests …", function() {
    describe("Test with age restriction", function() {

        it('Should return something if the movies starts with G', ()=> {
            expect(movieTheater.ageRestrictions('G')).to.equal("All ages admitted to watch the movie");
        });

        it('Should return something if the movies starts with PG', ()=> {
            expect(movieTheater.ageRestrictions('PG')).to.equal("Parental guidance suggested! Some material may not be suitable for pre-teenagers");
        });

        it('Should return something if the movies starts with R', ()=> {
            expect(movieTheater.ageRestrictions('R')).to.equal("Restricted! Under 17 requires accompanying parent or adult guardian");
        });

        it('Should return something if the movies starts with NC-17', ()=> {
            expect(movieTheater.ageRestrictions('NC-17')).to.equal("No one under 17 admitted to watch the movie");
        });

        it('Should return something if the movies starts with random str', ()=> {
            expect(movieTheater.ageRestrictions('hello')).to.equal("There are no age restrictions for this movie");
        });
    
    
    });


    describe('Tests with moneySpent', ()=>{
        
        it('Should throw error if the input is only numbers', ()=> {
            expect(()=> movieTheater.moneySpent(1,1,1)).to.throw();
        });

        it('Should throw error if the food is not an array', ()=> {
            expect(()=> movieTheater.moneySpent('1','a',[])).to.throw();
        });

        it('Should throw error if the drinks is not an array', ()=> {
            expect(()=> movieTheater.moneySpent(1,[],'1')).to.throw();
        });

        it('Should return the total price of tickets, food and beverage', ()=> {
            expect(movieTheater.moneySpent(1,['Nachos'], ['Water'])).to.equal(`The total cost for the purchase is 22.50`);
        });

        it('Should return the total price of  2 tickets, food and beverage', ()=> {
            expect(movieTheater.moneySpent(2,['Nachos'], ['Water'])).to.equal(`The total cost for the purchase is 37.50`);
        });

        it('Should return the total price of one tickets, 2food and 2beverages', ()=> {
            expect(movieTheater.moneySpent(1,['Nachos', 'Popcorn'], ['Water', 'Soda'])).to.equal(`The total cost for the purchase is 29.50`);

        });

        it("Should be correct with money spend 50 with no discount", function () {
            expect(movieTheater.moneySpent(2, ['Nachos', 'Nachos'], ['Water', 'Water', 'Soda', 'Soda'])).to.equal('The total cost for the purchase is 50.00');
        });

        it("Should return discounted price when spent money are mover 50", function () {
            expect(movieTheater.moneySpent(3, ['Nachos', 'Nachos'], ['Water', 'Water', 'Soda', 'Soda'])).to.equal('The total cost for the purchase with applied discount is 52.00');
        });
        
 

    });

    describe('Tests with reservation', ()=>{
        it('Should throw error if the input is only nums', ()=> {
            expect(()=> movieTheater.reservation(1,1)).to.throw();
        });
        it('Should throw error if the inputs are num and arr', ()=> {
            expect(()=> movieTheater.reservation(1,[])).to.throw();
        });
        it('Should throw error if the input is only strings', ()=> {
            expect(()=> movieTheater.reservation('mo','str')).to.throw();
        });

        it('Should return nums of free rows', ()=> {
            expect(movieTheater.reservation([{ rowNumber: 1, freeSeats: 7 }, { rowNumber: 2, freeSeats: 5 }], 2)).to.equal(2);
        });


    })
});
