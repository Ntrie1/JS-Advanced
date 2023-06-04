import { html, nothing } from "../../node_modules/lit-html/lit-html.js";
import { searchShoe } from "../data/servises.js";
import { getUserData } from "../util.js";


const searchTemplate = (onSearch, foundShoes, isRegistered) => html`
<section id="search">
<h2>Search by Brand</h2>

<form class="search-wrapper cf">
  <input
    id="#search-input"
    type="text"
    name="search"
    placeholder="Search here..."
    required
  />
  <button @click=${onSearch} type="submit">Search</button>
</form>

<h3>Results:</h3>


${foundShoes.length > 0 ? foundShoes.map(x=> foundShoesCard(x, isRegistered)) : html`<h2>There are no results found.</h2>`}


</section>`

const foundShoesCard = (shoe, isRegistered) => html`
<div id="search-container">
<ul class="card-wrapper">
  <!-- Display a li with information about every post (if any)-->
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

    ${isRegistered   
    ? html`<a class="details-btn" href="/details/${shoe._id}">Details</a>`
    : nothing}
    
  </li>
</ul>

</div>`


export async function searchPage(ctx){
    
    let isRegistered = getUserData();

  
  
    async function onSearch(e){ 
    e.preventDefault();
    let userInput = document.getElementById('#search-input').value;
    let foundShoes = await searchShoe(userInput)

    ctx.render(searchTemplate(onSearch, foundShoes, isRegistered))
}
ctx.render(searchTemplate(onSearch, [], []))

}