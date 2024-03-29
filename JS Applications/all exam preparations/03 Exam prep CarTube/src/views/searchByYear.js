import { html } from "../../node_modules/lit-html/lit-html.js";
import { getMyQueryStr } from "../data/services.js";


const searchTemplate = (searchHandler, cars) => html`
<section id="search-cars">
<h1>Filter by year</h1>

<div class="container">
    <input id="search-input" type="text" name="search" placeholder="Enter desired production year">
    <button @click=${searchHandler} class="button-list">Search</button>
</div>

<h2>Results:</h2>


    <!-- Display all records -->
 ${cars.length > 0 ? cars.map(carCard) : html`<p class="no-cars"> No results.</p>`}


  
</div>
</section>`

const carCard = (car) => html`
<div class="listing">
        <div class="preview">
            <img src=${car.imageUrl}>
        </div>
        <h2>${car.brand} ${car.model}</h2>
        <div class="info">
            <div class="data-info">
                <h3>Year: ${car.year}</h3>
                <h3>Price: ${car.price} $</h3>
            </div>
            <div class="data-buttons">
                <a href="/details/${car._id}" class="button-carDetails">Details</a>
            </div>
        </div>
    </div>`




export async function searchByYear(ctx){

    async function searchHandler(e){
        let searchElement = document.getElementById('search-input')
   
        let cars = await getMyQueryStr(searchElement.value);
        let slicedcars = cars.slice(0,2)
       
        ctx.render(searchTemplate(searchHandler, slicedcars))
    }

    ctx.render(searchTemplate(searchHandler, []))
    
    // const query = ctx.querystring;

    // const carData = await getMyQueryStr(query);
    // console.log(carData)
    
    
}