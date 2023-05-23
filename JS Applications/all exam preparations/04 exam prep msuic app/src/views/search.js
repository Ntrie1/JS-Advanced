import { html, nothing } from "../../node_modules/lit-html/lit-html.js";
import { searchAlbum } from "../data/services.js";
import { getUserData } from "../util.js";

const searchTemplate = (onSearch, foundAlbum, isRegistered) => html`
<section id="searchPage">
<h1>Search by Name</h1>

<div class="search">
    <input id="search-input" type="text" name="search" placeholder="Enter desired albums's name">
    <button class="button-list" @click=${onSearch}>Search</button>
</div>

<h2>Results:</h2>


${foundAlbum.length > 0 
    ? foundAlbum.map(x => resultsTemplate(x, isRegistered)) 
    : html` <div class="search-result"> <p class="no-result">No result.</p> </div>`}


    
</div>
</section>`;


const resultsTemplate = (album, isRegistered) => html`
<div class="search-result">
    <!--If have matches-->
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

            ${isRegistered ? html`<div class="btn-group">
            <a href="/details/${album._id}" id="details">Details</a>
        </div>` : nothing}
            
        </div>
    </div>`



export async function searchPage(ctx){

    const user = getUserData()
    let isRegistered = user ? true : false;
    
   
    
    async function onSearch(e){
        e.preventDefault();
        let userInput = document.getElementById('search-input').value;
        
        let foundAlbum = await searchAlbum(userInput)
        
        
        
        ctx.render(searchTemplate(onSearch, foundAlbum ,isRegistered))
    }
    ctx.render(searchTemplate(onSearch, [] ,[]))
    




}