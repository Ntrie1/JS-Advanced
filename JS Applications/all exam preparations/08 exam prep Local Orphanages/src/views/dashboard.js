import { html } from "../../node_modules/lit-html/lit-html.js";
import { getAllMaterials } from "../data/services.js";

//TODO replace acc template
const dashboardTmeplate = (itemsData) => html`
<section id="dashboard-page">
<h1 class="title">All Posts</h1>

<!-- Display a div with information about every post (if any)-->
<div class="all-posts">

${itemsData.length > 0 
    ? itemsData.map(itemsCard) 
    : html`<h1 class="title no-posts-title">No posts yet!</h1>`}
   
    </div>
</div>

</section>`;


const itemsCard = (item) => html`
<div class="post">
<h2 class="post-title">${item.title}</h2>
<img class="post-image" src=${item.imageUrl} alt="Kids clothes">
<div class="btn-wrapper">
    <a href="/details/${item._id}" class="details-btn btn">Details</a>
</div>`




export async function dashboardPage(ctx){
    const itemsData = await getAllMaterials()

    ctx.render(dashboardTmeplate(itemsData));
}