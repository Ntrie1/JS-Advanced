window.addEventListener('load', solve);

// function solve() {
//     const inputModelEl = document.getElementById('model');
//     const inputYearEl = document.getElementById('year');
//     const inputDescriptionEl = document.getElementById('description');
//     const inputPriceEl = document.getElementById('price');
//     const funritureListElement = document.getElementById('furniture-list');

//     const buttonAdd = document.getElementById('add');

//     buttonAdd.addEventListener('click', (e)=>{
//         e.preventDefault();
//         let model = inputModelEl.value;
//         let description = inputDescriptionEl.value;
//         let year = Number(inputYearEl.value);
//         let price = Number(inputPriceEl.value);

//         if(!model || !description){
//             return;
//         }

//         if(year <= 0 || price <= 0){
//             return;
//         }

//         let rowElement = document.createElement('tr');
//         let modelCellElement =  document.createElement('td');
//         let priceCellElement = document.createElement('td');
//         let actionsCellElement = document.createElement('td');
//         let moreInfoButtonElement = document.createElement('button');
//         let buyButtonElement = document.createElement('button');
//         let contentRowElement = document.createElement('tr');
//         let yearContentElement = document.createElement('td');
//         let descriptionContentElement = document.createElement('td');
//         let totalPriceElement = document.querySelector('.total-price')
        
//         modelCellElement.textContent = model;
//         priceCellElement.textContent = price.toFixed(2);

//         moreInfoButtonElement.textContent = 'More Info';
//         moreInfoButtonElement.classList.add('moreBtn');
//         moreInfoButtonElement.addEventListener('click', (e)=>{
//             if(e.currentTarget.textContent === 'More Info'){
//                 contentRowElement.style.display = 'contents';
//                 e.currentTarget.textContent  = 'Less Info'
//             } else if(e.currentTarget.textContent === 'Less Info'){
//                 contentRowElement.style.display = 'none'
//                 e.currentTarget.textContent = 'More Info'
//             }
//         });

//         buyButtonElement.textContent = 'Buy it';
//         buyButtonElement.classList.add('buyBtn');
//         buyButtonElement.addEventListener('click',(e)=>{
//             let currentTotalPrice = Number(totalPriceElement.textContent);
//             let totalPrice = (currentTotalPrice + price);
//             totalPriceElement.textContent =  totalPrice.toFixed(2);
//             rowElement.remove();
//             contentRowElement.remove();
//         });

//         actionsCellElement.appendChild(moreInfoButtonElement);
//         actionsCellElement.appendChild(buyButtonElement);

//         rowElement.classList.add('info');

//         rowElement.appendChild(modelCellElement);
//         rowElement.appendChild(priceCellElement);
//         rowElement.appendChild(actionsCellElement);

//         yearContentElement.textContent = `Year: ${year}`;
//         descriptionContentElement.setAttribute('colspan', 3);
//         descriptionContentElement.textContent = `Description: ${description}`;

//         contentRowElement.classList.add('hide');
//         contentRowElement.style.display = 'none';

//         contentRowElement.appendChild(yearContentElement);
//         contentRowElement.appendChild(descriptionContentElement);
       
//         funritureListElement.appendChild(rowElement);
//         funritureListElement.appendChild(contentRowElement);
//     });

    

// }


function solve(){
    
    const modelInputEl = document.getElementById('model');
    const yearInputEl = document.getElementById('year');
    const descriptionInputEl = document.getElementById('description');
    const priceInputEl = document.getElementById('price');
    const addButton = document.getElementById('add');
    const funritureListElement = document.getElementById('furniture-list');

    addButton.addEventListener("click", (e) =>{
       e.preventDefault();

        let model = modelInputEl.value;
        let year = Number(yearInputEl.value);
        let description = descriptionInputEl.value;
        let price = Number(priceInputEl.value);

        if(!model || !description){
            return;
        }
        if(year <=0 || price <= 0){
            return;
        }

        let infoFieldElement = document.createElement('tr');
        let modelCellElement = document.createElement('td');
        let priceCellElement =  document.createElement('td');
        let actionsCellElement = document.createElement('td');
        let infoButtonElement = document.createElement('button');
        let buyButtonElement =  document.createElement('button');
        let contentRowEl = document.createElement('tr');
        let yearContentEl = document.createElement('td');
        let descriptionContentEl = document.createElement('td');
        let totalPriceElement = document.querySelector('.total-price')


        modelCellElement.textContent =  model;
        priceCellElement.textContent = price.toFixed(2);

        infoButtonElement.textContent = 'More Info';
        infoButtonElement.classList.add('moreBtn');
        infoButtonElement.addEventListener('click', (e)=>{
           if(e.currentTarget.textContent === 'More Info'){
            e.currentTarget.textContent = 'Less Info';
            contentRowEl.style.display = 'contents';
           } else {
            e.currentTarget.textContent = 'More Info';
            contentRowEl.style.display = 'none';
           }

        });

        buyButtonElement.textContent = 'Buy it';
        buyButtonElement.classList.add('buyBtn');
        buyButtonElement.addEventListener('click', (e)=>{
           let currentTotalPrice = Number(totalPriceElement.textContent);
           let totalPrice =  currentTotalPrice + price;
           totalPriceElement.textContent =  totalPrice.toFixed(2)
           infoFieldElement.remove();
           contentRowEl.remove();
        })

        contentRowEl.classList.add('hide');
        contentRowEl.style.display = 'none';

        descriptionContentEl.setAttribute('colspan', 3);
        descriptionContentEl.textContent = `Description: ${description}`;
        yearContentEl.textContent = `Year: ${year}`;

    
        contentRowEl.appendChild(yearContentEl);
        contentRowEl.appendChild(descriptionContentEl);

        actionsCellElement.appendChild(infoButtonElement)
        actionsCellElement.appendChild(buyButtonElement)

        infoFieldElement.classList.add('info')
        infoFieldElement.appendChild(modelCellElement);
        infoFieldElement.appendChild(priceCellElement);
        infoFieldElement.appendChild(actionsCellElement);

        funritureListElement.appendChild(infoFieldElement);
        funritureListElement.appendChild(contentRowEl)









    });





}