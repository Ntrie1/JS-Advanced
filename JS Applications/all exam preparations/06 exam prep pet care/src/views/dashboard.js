import { html } from "../../node_modules/lit-html/lit-html.js";
import { getAllPetsData } from "../data/services.js";

//TODO replace acc template
const dashboardTemplate = (petData) => html`
<section id="dashboard">
<h2 class="dashboard-title">Services for every animal</h2>
<div class="animals-dashboard">
    
   
${petData.length > 0 
    ? petData.map(dashboardCard) 
    : html` <div>
<p class="no-pets">No pets in dashboard</p>
</div>`}
 
   
</div>
</section>`

const dashboardCard = (pet) => html`
<div class="animals-board">
                    <article class="service-img">
                        <img class="animal-image-cover" src=${pet.image}>
                    </article>
                    <h2 class="name">${pet.name}</h2>
                    <h3 class="breed">${pet.breed}</h3>
                    <div class="action">
                        <a class="btn" href="/details/${pet._id}">Details</a>
                    </div>
                </div>`




export async function dashboardPage(ctx){
   
    const petData = await getAllPetsData();

   
   
    ctx.render(dashboardTemplate(petData));
}