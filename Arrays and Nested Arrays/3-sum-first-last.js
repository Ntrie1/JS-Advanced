function sumFirstLast(arr){

    const firstNum = Number(arr.shift());
    const lastNum = Number(arr.pop());

    let result = firstNum + lastNum;
    console.log(result);




} sumFirstLast(['20', '30', '40']);