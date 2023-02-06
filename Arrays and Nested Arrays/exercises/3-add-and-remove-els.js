function addAndRemoveElements(arr){

    const newArr = [];
    let counter = 1;
    for (let i = 0; i < arr.length; i++) {
        const command = arr[i];
        if(command === 'add'){
            newArr.push(counter++);
        } else if (command === 'remove'){
            newArr.pop(counter++);
        }
        
    }
    if(!newArr.length){
        console.log('Empty');
    } else {
        console.log(newArr.join('\n'));
    }



} addAndRemoveElements(['add', 
'add', 
'add', 
'add']);