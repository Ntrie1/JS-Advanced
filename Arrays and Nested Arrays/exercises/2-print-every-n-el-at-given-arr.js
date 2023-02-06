function solve(arr, number){

    let myArr = [];
 
    for (let i = 0; i <= arr.length; i+=number) {
        const element = arr[i];
        
        myArr.push(element);
    }
   
    // alt solution ---> arr.filter((el, index) => index % number == 0);

   return myArr; 




} solve(['5', 
'20', 
'31', 
'4', 
'20'], 
2);