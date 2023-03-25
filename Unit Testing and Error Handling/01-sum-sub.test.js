 const assert = require('assert').strict;
const solve = require('./01-sub-sum')


describe('subSub calcluator', ()=>{
    it('should calculate sub-sum when index is larger then length',() =>{
        // arrange 
        let expectedSum = 150;
        let numbers = [10, 20,  30, 40, 50, 60];
        let startIndex = 3;
        let endIndex = 300;
    
    // act
        let actualSum = solve(numbers, startIndex, endIndex);
    
    
    // assert
    assert.equal(actualSum, expectedSum)
    })
    
    it('Should calcuate subSum when startIndex is lower than 0', ()=>{
        let expectedSum = 60;
        let numbers = [10, 20,  30, 40, 50, 60];
        let startIndex = -100;
        let endIndex = 2;
    
    
        let actualSum = solve(numbers, startIndex, endIndex);
    
    
    
    assert.equal(actualSum, expectedSum)
    })
    
})


// it('should calculate sub-sum when index is larger then length',() =>{
//     // arrange 
//     let expectedSum = 150;
//     let numbers = [10, 20,  30, 40, 50, 60];
//     let startIndex = 3;
//     let endIndex = 300;

// // act
//     let actualSum = solve(numbers, startIndex, endIndex);


// // assert
// assert.equal(actualSum, expectedSum)
// })

// it('Should calcuate subSum when startIndex is lower than 0', ()=>{
//     let expectedSum = 60;
//     let numbers = [10, 20,  30, 40, 50, 60];
//     let startIndex = -100;
//     let endIndex = 2;


//     let actualSum = solve(numbers, startIndex, endIndex);



// assert.equal(actualSum, expectedSum)
// })

// // function test(){
// // arrange 
//     let expectedSum = 150;
//     let numbers = [10, 20,  30, 40, 50, 60];
//     let startIndex = 3;
//     let endIndex = 300;

// // act
//     let actualSum = solve(numbers, startIndex, endIndex);


// // assert
// // assert.equal(actualSum, expectedSum)
//     if(actualSum === expectedSum){
//         console.log('correct');
//     } else {
//         console.log('Error');
//     }


   
    
// } test();