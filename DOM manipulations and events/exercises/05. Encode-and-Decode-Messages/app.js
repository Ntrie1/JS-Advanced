function encodeAndDecodeMessages() {
    const textArea = document.querySelectorAll('textarea');
    const buttons = document.querySelectorAll('button');
    buttons[0].addEventListener('click', encode);
    buttons[1].addEventListener('click', decode);

    function encode(){
        let encodedMessage = '';
        const input = textArea[0].value;

        for (let i = 0; i < input.length; i++) {
            const element = input[i];
            encodedMessage += String.fromCharCode(element.charCodeAt() + 1)
        }
        textArea[0].value = '';
        textArea[1].value = encodedMessage;
    }


    function decode(event){
       
        let decondedMessage = '';
        let input = event.currentTarget.parentElement.children[1];
        let inputValue = input.value

        for (let index = 0; index < inputValue.length; index++) {
            const element = inputValue[index];
            decondedMessage += String.fromCharCode(element.charCodeAt() - 1);
        }
        textArea[1].value = decondedMessage;
      //  buttons[1].disabled =  true;
    }


}