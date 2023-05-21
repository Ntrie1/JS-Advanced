import { html, nothing } from "../../node_modules/lit-html/lit-html.js";
import { deleteCar, getCarById } from "../data/services.js";
import { getUserData } from "../util.js";

const detailsTemplate = (car, isUser, onDelete) => html`
<section id="listing-details">
<h1>Details</h1>
<div class="details-info">
    <img src=${car.imageUrl}>
    <hr>
    <ul class="listing-props">
        <li><span>Brand:</span> ${car.brand}</li>
        <li><span>Model:</span> ${car.model}</li>
        <li><span>Year:</span> ${car.year}</li>
        <li><span>Price:</span> ${car.price}$</li>
    </ul>

    <p class="description-para">${car.description}</p>

    ${isUser ? html`<div class="listings-buttons">
    <a href="/edit/${car._id}" class="button-list">Edit</a>
    <a @click=${onDelete} href="javascript:void(0)" class="button-list">Delete</a>
</div>`
: nothing}
    
</div>
</section>`



 export async function detialsPage(ctx){
   
    const carId = ctx.params.id;
  
    const carData = await getCarById(carId);

    let userId = getUserData()?._id;
    let isUser = true;
    
    if(userId !== carData._ownerId){
        isUser = false;
    }


    ctx.render(detailsTemplate(carData, isUser, onDelete))


    async function onDelete(){
        const choice = confirm('Are you sure you want to delete this?');
        if(choice){
            await deleteCar(carId)
            ctx.page.redirect('/all-listings')
        }
    }

  


 }