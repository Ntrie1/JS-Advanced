const isOddOrEven = require('./02-even-or-odd');
const { assert } =  require('chai');

describe('isOddOrEven function tests', ()=>{
//invalid input
    it('should return undefined if the parameter is a number',()=>{
        assert.equal(isOddOrEven(10),undefined);
    });


    it('should return undefined if the parameter is an object',()=>{
        assert.equal(isOddOrEven({}),undefined);
    });


    it('should return undefined if the parameter is an array',()=>{
        assert.equal(isOddOrEven([]),undefined);
    });

    it('should return undefined if the parameter is undefined',()=>{
        assert.equal(isOddOrEven(undefined),undefined);
    });

    it('should return undefined if the parameter is null',()=>{
        assert.equal(isOddOrEven(null),undefined);
    });

// valid input tests 

it('should return even as result',()=>{
    assert.equal(isOddOrEven('hi'),'even');
});

it('should return odd as result',()=>{
    assert.equal(isOddOrEven('bye'),'odd');
});













});