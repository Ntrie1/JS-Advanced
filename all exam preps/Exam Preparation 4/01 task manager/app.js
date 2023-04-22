function solve() {
   const taskInputEl = document.getElementById('task');
   const descriptionInputEl = document.getElementById('description');
   const dueDateInputEl = document.getElementById('date');
   const addButton = document.getElementById('add');

   const openArea = document.querySelectorAll('section')[1].querySelectorAll('div')[1];
   const progressArea = document.querySelectorAll('section')[2].querySelectorAll('div')[1];
   const completeArea = document.querySelectorAll('section')[3].querySelectorAll('div')[1];


   addButton.addEventListener('click',(e)=>{
    e.preventDefault();
    let task = taskInputEl.value;
    let description = descriptionInputEl.value;
    let date = dueDateInputEl.value;

    if(task === '' || description === '' || date === ''){
        return;
    }

    const article = document.createElement('article');
    const h3 = document.createElement('h3');
    h3.textContent = task;
    const p = document.createElement('p');
    p.textContent = `Description: ${description}`;
    const p2 = document.createElement('p');
    p2.textContent = `Due Date: ${date}`;

    article.appendChild(h3);
    article.appendChild(p);
    article.appendChild(p2);
    
    const divEl = document.createElement('div');
    divEl.className = 'flex';
    const startButton = document.createElement('button');
    startButton.textContent = 'Start'
    startButton.className = 'green';
    const deleteButton = document.createElement('button');
    deleteButton.textContent = 'Delete'
    deleteButton.className = 'red';
    
    divEl.appendChild(startButton);
    divEl.appendChild(deleteButton);
    article.appendChild(divEl);

    openArea.appendChild(article);
  
    deleteButton.addEventListener('click', (e)=>{
        article.remove();
    });

    startButton.addEventListener('click', (e)=>{

        const article = document.createElement('article');
        const h3 = document.createElement('h3');
        h3.textContent = task;
        const p = document.createElement('p');
        p.textContent = `Description: ${description}`;
        const p2 = document.createElement('p');
        p2.textContent = `Due Date: ${date}`;

        article.appendChild(h3);
        article.appendChild(p);
        article.appendChild(p2);

        const divEl = document.createElement('div');
        divEl.className = 'flex';
        const deleteBtn = document.createElement('button');
        deleteBtn.textContent = 'Delete';
        deleteBtn.className = 'red';
        const finishBtn = document.createElement('button');
        finishBtn.textContent = 'Finish';
        finishBtn.className = 'orange';

        divEl.appendChild(deleteBtn);
    divEl.appendChild(finishBtn);
    article.appendChild(divEl);

    progressArea.appendChild(article);
    openArea.remove();

    deleteBtn.addEventListener('click', (e)=>{
        article.remove();
    });

    finishBtn.addEventListener('click', (e)=>{
        completeArea.appendChild(article);
        article.removeChild(divEl);
    });

        
    });
    

   });

}


