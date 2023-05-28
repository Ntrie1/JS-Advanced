import { html, nothing } from "../../node_modules/lit-html/lit-html.js";
import { deleteMeme, getMemeDetails } from "../data/services.js";
import { getUserData } from "../util.js";

    
    
    const detailsTemplate = (memeData, onDelete) => html`
    <section id="meme-details">
    <h1>Meme Title: Bad code can present some problems

    </h1>
    <div class="meme-details">
        <div class="meme-img">
            <img alt="meme-alt" src=${memeData.imageUrl}>
        </div>
        <div class="meme-description">
            <h2>Meme Description</h2>
            <p>${memeData.description}</p>

            ${memeData.isOwner && memeData.isUser
            ? html`<a class="button warning" href="/edit/${memeData._id}">Edit</a>
            <button @click=${onDelete} class="button danger">Delete</button>` 
            : nothing}
        
            
        </div>
    </div>
</section>`






export async function detailsPage(ctx){
    const memeId = ctx.params.id;
    const memeData = await getMemeDetails(memeId);
    
    const userId = getUserData()?._id;
    memeData.isOwner = userId == memeData._ownerId ? true : false; 
   memeData.isUser = userId ? true : false;
   console.log(memeData.isUser);

   console.log(memeData.isOwner);
    ctx.render(detailsTemplate(memeData, onDelete))

    async function onDelete(){
        let choice = confirm('Are you sure?');
        if(choice){
            await deleteMeme(memeId);
            ctx.page.redirect('/catalog')
        }
    }



}
    
    
    
   