window.addEventListener('load', solve);

function solve() {
   
    const inputs = {
        firstName: document.getElementById('first-name'),
        lastName: document.getElementById('last-name'),
        peopleQuantity: document.getElementById('people-count'),
        fromDate: document.getElementById('from-date'),
        daysCount: document.getElementById('days-count'),
    };

    let sections ={
        ticketReview: document.querySelector('.ticket-info-list'),
        confirmTicket: document.querySelector('.confirm-ticket'),
        mainDiv: document.querySelector('#main'),
        body: document.querySelector('#body'),
        

    };

    

    document.getElementById('next-btn').addEventListener('click', (e) => {
        e.preventDefault();

        const firstName = inputs.firstName.value;
        const lastName = inputs.lastName.value;
        const peopleQuantity = inputs.peopleQuantity.value;
        const fromDate = inputs.fromDate.value;
        const daysCount = inputs.daysCount.value;

        if (firstName == '' || lastName == '' || peopleQuantity == '' || fromDate == '' || daysCount == '') {
            return;
        }

        const li = genareteEl('li', '', sections.ticketReview, { class: 'ticket' });
        const article = genareteEl('article', '', li);
        const h3 = genareteEl('h3', `Name: ${firstName} ${lastName}`, article);
        const pOne = genareteEl('p', `From date: ${fromDate}`, article);
        const pTwo = genareteEl('p', `For ${daysCount} days`, article);
        const pThree = genareteEl('p', `For ${peopleQuantity} people`, article);
        const editButton = genareteEl('button', 'Edit', li, { class: 'edit-btn' });
        const constinueButton = genareteEl('button', 'Continue', li, { class: 'continue-btn' });

        Object.keys(inputs).map((key) => (inputs[key].value = ''));
        e.currentTarget.disabled = true;

        editButton.addEventListener('click', () => {
            inputs.firstName.value = firstName;
            inputs.lastName.value = lastName;
            inputs.peopleQuantity.value = peopleQuantity;
            inputs.fromDate.value = fromDate;
            inputs.daysCount.value = daysCount;
            li.remove();
            document.getElementById('next-btn').disabled = false;

        })

        constinueButton.addEventListener('click', (e)=>{
            e.target.parentElement.remove();
            editButton.remove();
            constinueButton.remove();
           
            li.classList.remove('ticket');
            li.classList.add('ticket-content');

            const confirmButton = genareteEl('button', 'Confirm', li, {class: 'confirm-btn'});
            const cancelButton = genareteEl('button', 'Cancel', li, {class: 'cancel-btn'});
            sections.confirmTicket.appendChild(li);

           
           
            confirmButton.addEventListener('click', (e)=>{
               sections.mainDiv.remove();
               
               const h1 = genareteEl('h1', 'Thank you, have a nice day!', sections.body, {id: 'thank-you'})
               const backButton = genareteEl('button', 'Back', sections.body, {id: 'back-btn'});
               backButton.addEventListener('click',()=>{
                window.location.reload();
               })

            
            });
    
            cancelButton.addEventListener('click',(e)=>{
                e.target.parentElement.remove();
                document.getElementById('next-btn').disabled = false;
            })


        })
        
    })




 function genareteEl(typeEl, content, parent, attributes) {
        const el = document.createElement(typeEl);
        el.textContent = content;
        if (attributes) {
            for (const prop in attributes) {
                el.setAttribute(prop, attributes[prop]);
            }
        }
        if (parent) {
            parent.appendChild(el);
        }
        return el;
    }

    

}


    
    
