import { html, nothing } from "../../node_modules/lit-html/lit-html.js";
import { getAllAlbums } from "../data/services.js";
import { getUserData } from "../util.js";

//TODO replace acc template
const catalogTemplate = (albums) => html`
<section id="catalogPage">
            <h1>All Albums</h1>

            ${albums.length > 0 ? albums.map(x => catalogCard(x, albums.isUser)) : html` <p>No Albums in Catalog!</p>`}
        </section>`;


        const catalogCard = (album, isUser) => html`
        <div class="card-box">
        <img src=${album.imgUrl}>
        <div>
            <div class="text-center">
                <p class="name">Name: ${album.name}</p>
                <p class="artist">Artist: ${album.artist}</p>
                <p class="genre">Genre: ${album.genre}</p>
                <p class="price">Price: $${album.price}</p>
                <p class="date">Release Date: ${album.releaseDate}</p>
            </div>
            
            ${isUser ? html`<div class="btn-group">
            <a href="/details/${album._id}" id="details">Details</a>
        </div>` : nothing }
            
        </div>
    </div>`




export async function catalogPage(ctx){
     
    const albums = await getAllAlbums();
    
    const user = getUserData();
    albums.isUser = true;
    if(user == null){
        albums.isUser = false;
    }

    
    ctx.render(catalogTemplate(albums));
}