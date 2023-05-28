import { html } from "../../node_modules/lit-html/lit-html.js";
import { getAllMemes } from "../data/services.js";


const memeTemplate = (memesData) => html`
<section id="meme-feed">
<h1>All Memes</h1>
<div id="memes">

${memesData.length > 0 ? memesData.map(memeCard) : html`<p class="no-memes">No memes in database.</p>` }
  
</div>
</section>`


const memeCard = (meme) => html`
<div class="meme">
<div class="card">
    <div class="info">
        <p class="meme-title">${meme.title}</p>
        <img class="meme-image" alt="meme-img" src=${meme.imageUrl}>
    </div>
    <div id="data-buttons">
        <a class="button" href="/details/${meme._id}">Details</a>
    </div>
</div>
</div>`






 



 export async function catalogMemePage(ctx){
    const memesData = await getAllMemes();

    ctx.render(memeTemplate(memesData))
 }