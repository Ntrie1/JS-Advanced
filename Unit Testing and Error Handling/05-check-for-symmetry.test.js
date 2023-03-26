const isSymmetric =  require('./05-check-for-symmetry');
const { expect } = require('chai');


describe('isSymmetric function tests', ()=>{

    it('Should return true for symmetrics array',()=>{
        const arr = [1,2,2,1];
        expect(isSymmetric(arr)).to.be.true;
    });

    it('Should return false for non-symmetrics arrays', ()=>{
        const arr = [1,2,3];
        expect(isSymmetric(arr)).to.be.false;
    });

    it('Should return false with non-array argument', ()=>{
        const data = 121;
        expect(isSymmetric(data)).to.be.false;
    });

    it('Should return true when length is odd', ()=>{
        const arr = [1,2,1];
        expect(isSymmetric(arr)).to.be.true;
    });

    it('Should return false for array-like argument', () =>{
        const arr = '1221';
        expect(isSymmetric(arr)).to.be.false;
    });

    it('Should return false for type mismatched elements', () => {
        expect(isSymmetric([1, 2, "1"])).to.be.false;
    });

    it('Should works with symmetric string array', () => {
        expect(isSymmetric(["a", "b", "b", "a"])).to.be.true;
    });




});










