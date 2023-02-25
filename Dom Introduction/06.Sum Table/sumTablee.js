function sumTable(){
    let tableData = document.querySelectorAll('table tr');
    let sum = 0;

    for (let i = 1; i < tableData.length - 1; i++) {
        let cols = tableData[i].children
        let price = cols[1].textContent;
        sum += Number(price);
    }
    document.getElementById('sum').textContent = sum;


}
