function squareOfStars(param){

let string = '';
    for (let i = 0; i < param; i++) {
       
        for (let j = 0; j < param; j++) {
            string += '* ';         
        }
    string += '\n'
}
console.log(string);



} squareOfStars(5);