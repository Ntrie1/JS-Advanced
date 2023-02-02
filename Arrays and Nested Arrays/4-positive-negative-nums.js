function positiveNegativeNums(arr){

    const result = [];

    for (const element of arr) {
        if(element < 0){
            result.unshift(element)
        } else {
            result.push(element)
        }
    }

    for (const element of result) {
console.log(element);
    }




} positiveNegativeNums([7, -2, 8, 9])