import { html, nothing } from "../../node_modules/lit-html/lit-html.js";
import { deleteShoePost, getCertainShoeData } from "../data/servises.js";
import { getUserData } from "../util.js";



const detailsTemplate = (shoe, onDelete) => html`
<section id="details">
<div id="details-wrapper">
  <p id="details-title">Shoe Details</p>
  <div id="img-wrapper">
    <img src=${shoe.imageUrl} alt="example1" />
  </div>
  <div id="info-wrapper">
    <p>Brand: <span id="details-brand">${shoe.brand}</span></p>
    <p>
      Model: <span id="details-model">${shoe.model}</span>
    </p>
    <p>Release date: <span id="details-release">${shoe.release}</span></p>
    <p>Designer: <span id="details-designer">${shoe.designer}</span></p>
    <p>Value: <span id="details-value">${shoe.value}</span></p>
  </div>

  ${shoe.isOwner 
    ? html`<div id="action-buttons">
  <a href="/edit/${shoe._id}" id="edit-btn">Edit</a>
  <a @click=${onDelete} href="javascript:void(0)" id="delete-btn">Delete</a>
</div>`
 : nothing}
  <!--Edit and Delete are only for creator-->

</div>
</section>`




export async function detailsPage (ctx){
   const shoeId = ctx.params.id;
   const shoeData = await getCertainShoeData(shoeId);
   const userId = await getUserData()?._id;

   shoeData.isOwner = userId == shoeData._ownerId ? true : false
   
   
    ctx.render(detailsTemplate(shoeData, onDelete));

  
    async function onDelete(){
      let choice = confirm('Are u sure u wanna delete this?')
      if(choice){
        await deleteShoePost(shoeId);
        ctx.page.redirect('/dashboard')
      }
    }



}