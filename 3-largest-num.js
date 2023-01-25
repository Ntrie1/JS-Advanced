function largestNum(a, b, c) {
    let result;

    if (a > b && a > c) {
        result = a;
    } else if (b > a && b > c) {
        result = b;
    } else {
        result = c;
    }


    console.log(`The largest number is ${result}.`);



} largestNum(5, -3, 16);