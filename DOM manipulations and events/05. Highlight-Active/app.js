function focused() {
    let inputs = document.getElementsByTagName('input');
    
    for (let input of inputs) {
        input.addEventListener('focus', focusFunc);
        input.addEventListener('blur', blurFunc);
    }

    function focusFunc(event){
        event.target.parentElement.classList.add("focused");
    }

    function blurFunc(event){
        event.target.parentElement.classList.remove("focused")
    }
   
}