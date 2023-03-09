function deleteByEmail() {
    let emailInputElement =  document.querySelector('input[name="email"]');
    let emailCellElement = document.querySelectorAll('tr td:nth-of-type(2)');
    let resultElement = document.getElementById('result')


    let emailElements = Array.from(emailCellElement);
    let targetElement = emailElements.find(x => x.textContent == emailInputElement.value);
    
    if(targetElement){
        targetElement.parentNode.remove();
        resultElement.textContent = 'Deleted.'
    } else {
        resultElement.textContent = 'Not found.'
    }

   
}




