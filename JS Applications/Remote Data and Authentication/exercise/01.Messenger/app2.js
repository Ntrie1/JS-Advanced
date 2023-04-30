const url = 'http://localhost:3030/jsonstore/messenger';
const messagesField = document.getElementById('messages');

function attachEvents() {
    document.getElementById('submit').addEventListener('click',postMessage);
   document.getElementById('refresh').addEventListener('click',loadAllMessages);
}

async function postMessage(){
  const authorInputEl = document.querySelector('input[name="author"]');
  const contentInputEl = document.querySelector('input[name="content"]');

  if(authorInputEl.value == '' || contentInputEl.value == ''){
    alert('Fileds are reqired!');
  }
  
  if(authorInputEl.value !== '' || contentInputEl.value !== ''){
    const res = await fetch(url,{
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({author: authorInputEl.value, content: contentInputEl.value}),

    });
    authorInputEl.value = '';
   contentInputEl.value = '';
  }



}

async function loadAllMessages(){
    const res = await fetch(url);
    const data = await res.json();

    messagesField.value = Object.values(data).map(({author,content}) => `${author}: ${content}`).join('\n')

}

attachEvents();