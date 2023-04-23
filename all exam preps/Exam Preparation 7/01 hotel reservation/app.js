window.addEventListener('load', solve);

function solve() {

    const inputs = {
        firstName: document.getElementById('first-name'),
        lastName: document.getElementById('last-name'),
        checkInDate: document.getElementById('date-in'),
        checkOutDate: document.getElementById('date-out'),
        guestQuantity: document.getElementById('people-count')
    };

    const sections = {
        reservationInfo: document.querySelector('.info-list'),
        confirmReservation: document.querySelector('.confirm-list'),
        verification: document.querySelector('#verification')
    };

    document.getElementById('next-btn').addEventListener('click', (e) => {
        e.preventDefault();

        const firstName = inputs.firstName.value;
        const lastName = inputs.lastName.value;
        const checkInDate = inputs.checkInDate.value;
        const checkOutDate = inputs.checkOutDate.value;
        const guestQuantity = inputs.guestQuantity.value;

        if (firstName == '' || lastName == '' || checkInDate == '' || checkOutDate == '' || guestQuantity == '' || checkOutDate < checkInDate) {
            return;
        }

        const li = genareteEl('li', '', sections.reservationInfo, { class: 'reservation-content' });
        const article = genareteEl('article', '', li);
        const h3 = genareteEl('h3', `Name: ${firstName} ${lastName}`, article);
        const pOne = genareteEl('p', `From date: ${checkInDate}`, article);
        const pTwo = genareteEl('p', `To date: ${checkOutDate}`, article);
        const pThree = genareteEl('p', `For ${guestQuantity} people`, article);
        const editButton = genareteEl('button', 'Edit', li, { class: 'edit-btn' });
        const constinueButton = genareteEl('button', 'Continue', li, { class: 'continue-btn' });

        Object.keys(inputs).map((key) => (inputs[key].value = ''));
        e.currentTarget.disabled = true;


        editButton.addEventListener('click', () => {
            inputs.firstName.value = firstName;
            inputs.lastName.value = lastName;
            inputs.checkInDate.value = checkInDate;
            inputs.checkOutDate.value = checkOutDate;
            inputs.guestQuantity.value = guestQuantity;
            li.remove();
            document.getElementById('next-btn').disabled = false;

        })

        constinueButton.addEventListener('click', (e)=>{
            e.target.parentElement.remove();
            editButton.remove();
            constinueButton.remove();

            const confirmButton = genareteEl('button', 'Confirm', li, {class: 'confirm-btn'});
            const cancelButton = genareteEl('button', 'Cancel', li, {class: 'cancel-btn'});
            sections.confirmReservation.appendChild(li);

           
           
            confirmButton.addEventListener('click', (e)=>{
                e.target.parentElement.remove();
                document.getElementById('next-btn').disabled = false;
                sections.verification.classList.add('reservation-confirmed');
                sections.verification.textContent = 'Confirmed.';
              
            });
    
            cancelButton.addEventListener('click',(e)=>{
                e.target.parentElement.remove();
                document.getElementById('next-btn').disabled = false;
                sections.verification.classList.add('reservation-cancelled');
                sections.verification.textContent = 'Cancelled.';
            

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





