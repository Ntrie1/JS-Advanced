import { html, nothing } from "../../node_modules/lit-html/lit-html.js";
import { deletePost, getSpecificItemById, getTotalDonationsCount, getUserDonation, makeDonation } from "../data/services.js";
import { getUserData } from "../util.js";


const detialsTemplate = (item, onDelete, onDonate, donations) => html`
<section id="details-page">
<h1 class="title">Post Details</h1>

<div id="container">
    <div id="details">
        <div class="image-wrapper">
            <img src=${item.imageUrl} alt="Material Image" class="post-image">
        </div>
        <div class="info">
            <h2 class="title post-title">${item.title}</h2>
            <p class="post-description">Description: ${item.description}</p>
            <p class="post-address">Address: ${item.address}</p>
            <p class="post-number">Phone number: ${item.phone}</p>
            <p class="donate-Item">Donate Materials: ${donations}</p>

            ${item.isOwner 
            ? html` <div class="btns">
            <a href="/edit/${item._id}" class="edit-btn btn">Edit</a>
            <a @click=${onDelete} href="javascript:void(0)" class="delete-btn btn">Delete</a> </div>`
             : nothing}
        
             ${item.isUser && !item.isOwner && !item.hasDonated
                ? html`<a @click=${onDonate} href="javascript:void(0)" class="donate-btn btn">Donate</a> ` 
                : nothing}
             
             
        </div>
    </div>
</div>
</section>`




export async function detailsPage(ctx){
    const itemId = ctx.params.id;
    const userId = getUserData()?._id
    const item = await getSpecificItemById(itemId)

    const donations = await getTotalDonationsCount(itemId);
    const userDonations = await getUserDonation(itemId, userId);

    item.isOwner = userId == item._ownerId ? true : false;
    item.isUser = userId;
    item.hasDonated = userDonations > 0 ? true : false;
    

    ctx.render(detialsTemplate(item, onDelete, onDonate, donations))

    async function onDelete(){
        let choice = confirm('Are u sure?')
        if(choice){
            await deletePost(itemId);
            ctx.page.redirect('/')
        }
    }

    
    async function onDonate(){
        await makeDonation(itemId)
        ctx.page.redirect(`/details/${itemId}`)
    }



}