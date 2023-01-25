function circleArea(input){

    let inputType = typeof input;
    let result;

    if (inputType === 'number') {
        result = (Math.pow(input, 2) * Math.PI).toFixed(2);
        console.log(result);
    } else {
        console.log(`We can not calculate the circle area, because we receive a ${inputType}.`);
    }

    


}circleArea(5);