function colorize(){

    let rowElements = document.getElementsByTagName('tr')
    let rows = Array.from(rowElements);
   
    for (let i = 0; i < rows.length; i++) {
        
        if(i % 2 != 0){
            rows[i].style.background = 'teal';
        }
        
    }



}