import { html } from "../../node_modules/lit-html/lit-html.js";
import { getAllShoesData } from "../data/servises.js";


const dashboardTemplate = (shoesData) => html`
<section id="dashboard">
<h2>Collectibles</h2>
<ul class="card-wrapper">
 
<!-- Display a li with information about every post (if any)-->

${shoesData.length > 0 ? shoesData.map(shoeCard) : html`<h2>There are no items added yet.</h2>`}

</ul>

<!-- Display an h2 if there are no posts -->

</section>`

const shoeCard = (shoe) => html`
<li class="card">
<img src=${shoe.imageUrl} />
<p>
  <strong>Brand: </strong><span class="brand">${shoe.brand}</span>
</p>
<p>
  <strong>Model: </strong
  ><span class="model">${shoe.model}</span>
</p>
<p><strong>Value:</strong><span class="value">${shoe.value}</span>$</p>
<a class="details-btn" href="/details/${shoe._id}">Details</a>
</li>`




export async function dashboardPage(ctx){
  
    const shoesData = await getAllShoesData();
  
  
    ctx.render(dashboardTemplate(shoesData));
}