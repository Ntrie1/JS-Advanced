function addItem() {
    let itemsElement = document.getElementById('items');
    let inputEl = document.getElementById('newItemText');

    let liElement = document.createElement('li');
    liElement.textContent = inputEl.value;

    inputEl.value = '';

    let deleteElement = document.createElement('a');
    deleteElement.href = '#';
    deleteElement.textContent = '[Delete]';
    deleteElement.addEventListener('click', (e) =>{
        e.currentTarget.parentNode.remove();
    })
   
    liElement.appendChild(deleteElement)
    itemsElement.appendChild(liElement);
}



