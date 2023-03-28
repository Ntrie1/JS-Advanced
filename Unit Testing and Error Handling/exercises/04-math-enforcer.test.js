const mathEnforcer = require('./04-math-enforcer');
const { assert } = require('chai');


describe('mathEnforcer function tests', () => {

    describe('add five function tests', () => {
        //tests with incorrect input
        it('should return undefined with a string', () => {
            assert(mathEnforcer.addFive('TEST') === undefined);
        });

        it('should return undefined with an object', () => {
            assert(mathEnforcer.addFive({}) === undefined);
        });

        it('should return undefined with an array', () => {
            assert(mathEnforcer.addFive([]) === undefined);
        });

        it('should return undefined with undefined', () => {
            assert(mathEnforcer.addFive(undefined) === undefined);
        });

        it('should return undefined with null', () => {
            assert(mathEnforcer.addFive(null) === undefined);
        });
        //test with correct input
        it('Positive number +5', () => {
            assert(mathEnforcer.addFive(5) === 10);
        });

        it('Negative number +5', () => {
            assert(mathEnforcer.addFive(-5) === 0);
        });

        it('Decimal number +5', () => {
            assert(mathEnforcer.addFive(5.5) === 10.5);
        });


    });

    describe('subtract ten function tests', () => {
        it('should return undefined with a string', () => {
            assert(mathEnforcer.subtractTen('TEST') === undefined);
        });

        it('should return undefined with an object', () => {
            assert(mathEnforcer.subtractTen({}) === undefined);
        });

        it('should return undefined with an array', () => {
            assert(mathEnforcer.subtractTen([]) === undefined);
        });

        it('should return undefined with undefined', () => {
            assert(mathEnforcer.subtractTen(undefined) === undefined);
        });

        it('should return undefined with null', () => {
            assert(mathEnforcer.subtractTen(null) === undefined);
        });
        //test with correct input
        it('Positive number -10', () => {
            assert(mathEnforcer.subtractTen(5) === -5);
        });

        it('Negative number -10', () => {
            assert(mathEnforcer.subtractTen(-5) === -15);
        });

        it('Decimal number -10', () => {
            assert(mathEnforcer.subtractTen(15.5) === 5.5);
        });
    })


    describe('sum two numbers function tests', () => {
        it('Two positive integer numbers', () => {
            assert(mathEnforcer.sum(10, 20) === 30);
        });

        it('Two negative numbers', () => {
            assert(mathEnforcer.sum(-10, -2.5) === -12.5);
        });

        it('Two decimal numbers', () => {
            assert(mathEnforcer.sum(10.5, 2.1) === 12.6);
        });

        it('First parameter string second number', () => {
            assert(mathEnforcer.sum('', 20) === undefined);
        });

        it('First parameter number second string', () => {
            assert(mathEnforcer.sum(20, '20') === undefined);
        });
    });
});