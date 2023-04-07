window.addEventListener('load', solution);

function solution() {
 
  const submitBtn = document.getElementById('submitBTN');
  const editBtn = document.getElementById('editBTN');
  const continueBtn = document.getElementById('continueBTN');
  const block = document.getElementById('block');
  const preview = document.getElementById('infoPreview');

  submitBtn.disabled = false;
  editBtn.disabled = true;
  continueBtn.disabled = true;

  const inputValues = Array.from(document.getElementById('form').querySelectorAll('input'));
  const labelValue = Array.from(document.getElementById('form').querySelectorAll('label'));


  submitBtn.addEventListener('click',(e)=>{
    const fullName = inputValues[0].value;
    const email = inputValues[1].value;
    
    if(fullName !== '' && email !== ''){

      for (let i = 0; i < inputValues.length -1; i++) {

        const liElement = document.createElement('li');
        liElement.innerText = `${labelValue[i].innerText} ${inputValues[i].value}`;

        preview.appendChild(liElement);
        
      }

      for (let input of inputValues) {
        input.value = '';
      }

      e.currentTarget.disabled = true;
      editBtn.disabled = false;
      continueBtn.disabled = false;

    }
  });

  editBtn.addEventListener('click', (e)=>{
    const listItems = Array.from(preview.childNodes);

    for (let i = 0; i < inputValues.length - 1; i++) {
      inputValues[i].value = listItems[i].textContent.split(': ')[1];
      listItems[i].remove();
    }

    submitBtn.disabled = false;
  editBtn.disabled = true;
  continueBtn.disabled = true;

  });

  continueBtn.addEventListener('click', (e)=>{
    const divTag = document.createElement('h3');
    divTag.innerText = `Thank you for your reservation!`
    block.innerHTML = '';
    block.appendChild(divTag);
  });


}
