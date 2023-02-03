function biggestElement(arr) {

    let biggestNum = Number.NEGATIVE_INFINITY;
    arr.forEach(
        row => row.forEach(
            col => biggestNum = Math.max(biggestNum, col)));


    console.log(biggestNum);





} biggestElement([[20, 50, 10],
[8, 33, 145]]);