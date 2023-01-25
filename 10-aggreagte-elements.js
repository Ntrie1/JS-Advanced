function aggregateElements(arr){

    let numbersArr = arr.map(Number);
    let sum = numbersArr.reduce((a,b) => a+b);
    
    let inverseValuesSum = 0;
 
    for (let i = 0; i < numbersArr.length; i++) {
        inverseValuesSum += 1 / numbersArr[i];
    }

    let concatNums = arr.join('');

    console.log(sum);
    console.log(inverseValuesSum);
    console.log(concatNums);




} aggregateElements([1, 2, 3]);