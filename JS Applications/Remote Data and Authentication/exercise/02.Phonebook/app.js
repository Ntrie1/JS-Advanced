// function attachEvents() {
//     const url = 'http://localhost:3030/jsonstore/phonebook';

//     const ul = document.getElementById('phonebook');
//     const loadBtn = document.getElementById('btnLoad');
//     const createBtn = document.getElementById('btnCreate');

//     const person = document.getElementById('person');
//     const phone = document.getElementById('phone');

//     loadBtn.addEventListener('click', onLoadClick);
//     createBtn.addEventListener('click', onClickCreate);

//     async function onClickDelete(e){
//         const id = e.target.parentNode.id;
//         e.target.parentNode.remove();

//         const deleteRespone = await fetch(`${url}/${id}`, {
//                 method: 'DELETE',
//         });
       

        
//     }

//    async function onLoadClick(){
//     ul.innerHTML = '';
//         const response = await fetch(url);
//         const data = await response.json();

//         Object.values(data).forEach(x => {
//             const {person, phone, _id} = x;
//             const li =  createElement('li', `${person}: ${phone}`, ul);
//             li.setAttribute('id', _id);

//             const deleteBtn = createElement('button', 'Delete', li);
//             deleteBtn.setAttribute('id', x._id);
//             deleteBtn.addEventListener('click', onClickDelete)
//         })

//     }

//     async function onClickCreate(){
//         if(person.value !== '' && phone.value !== ''){
//             const response = await fetch(url, {
//                 method: 'POST',
//                 headers: {'Content-Type': 'application/json'},
//                 body: JSON.stringify({person: person.value, phone: phone.value})
//             });

//             person.value = '';
//             phone.value = '';

//         }
//     }

//     function createElement(type, text, appender){
//         const result = document.createElement(type);
//         result.textContent = text;
//         appender.appendChild(result);
        
//         return result;

//     }

   

    

// }

// attachEvents();

function attachEvents() {
    const personInput = document.getElementById('person');
    const phoneInput = document.getElementById('phone');
    const ulPhonebook = document.getElementById('phonebook');
    const loadBtn = document.getElementById('btnLoad');
    const createBtn = document.getElementById('btnCreate');

    const phoneBookUrl = 'http://localhost:3030/jsonstore/phonebook';

    loadBtn.addEventListener("click", loadContacts);
    createBtn.addEventListener("click", createPhoneContact);

    async function createPhoneContact() {
        if (!personInput.value || !phoneInput.value) return alert('No empty field allowed');
        await fetch(phoneBookUrl, {
            method: "POST",
            headers: { "Content-type": "application/json" },
            body: JSON.stringify({ person: personInput.value, phone: phoneInput.value })
        })

        personInput.value = '';
        phoneInput.value = '';
        //call and simulate click button for refreash and updating info
        loadBtn.click()
    }


    async function loadContacts() {
        ulPhonebook.innerHTML = ''
        const res = await fetch(phoneBookUrl);
        // if (!res.ok) throw new Error("Error");
        const data = await res.json();

        Object.values(data).forEach(el => {
            const liElement = document.createElement('li');
            liElement.textContent = `${el['person']}: ${el['phone']}`;
            const delBtn = document.createElement('button');
            delBtn.setAttribute('id', el['_id']);
            delBtn.textContent = "Delete";

            liElement.appendChild(delBtn);
            ulPhonebook.appendChild(liElement);

            delBtn.addEventListener('click', deleteFunc);
            async function deleteFunc(event) {
                const userId = event.target.id
                const targetUrl = `${phoneBookUrl}/${userId}`
                console.log(targetUrl);
                await fetch(targetUrl, {
                    method: 'DELETE'
                })
                event.target.parentNode.remove();
            }

        })

    }

}

attachEvents();