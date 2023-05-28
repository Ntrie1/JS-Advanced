import { html } from "../../node_modules/lit-html/lit-html.js";
import { getUserMemes } from "../data/services.js";
import { getUserData } from "../util.js";



const profileTemplate = (memeData, user) => html`
<section id="user-profile-page" class="user-profile">
<article class="user-info">
  ${user.gender == 'female' ? html`<img id="user-avatar-url" alt="user-profile"src="/images/female.png">` 
  : html`<img id="user-avatar-url" alt="user-profile"src="/images/male.png">`}
    <div class="user-content">
        <p>Username: ${user.username}</p>
        <p>Email: ${user.email}</p>
        <p>My memes count: ${memeData.length}</p>
    </div>
</article>
<h1 id="user-listings-title">User Memes</h1>
<div class="user-meme-listings">
    
<!-- Display : All created memes by this user (If any) --> 
    
${memeData.length > 0 ? memeData.map(memeTemplate) : html`<p class="no-memes">No memes in database.</p>`}
    
</div>
</section>`


const memeTemplate = (meme) => html`
<div class="user-meme">
        <p class="user-meme-title">${meme.title}</p>
        <img class="userProfileImage" alt="meme-img" src=${meme.imageUrl}>
        <a class="button" href="/details/${meme._id}">Details</a>
    </div>`




export async function profilePage(ctx){
    const user = await getUserData()
    const userId = await getUserData()?._id
    const memeData = await getUserMemes(userId);

    
        ctx.render(profileTemplate(memeData, user));
    
}