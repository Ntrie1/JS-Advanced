

import { html } from "../../node_modules/lit-html/lit-html.js";
import { getAllCars } from "../data/services.js";

//TODO replace acc template
const carListingTemplate = (carData) => html`


<section id="car-listings">
<h1>Car Listings</h1>
<div class="listings">
${carData.length > 0 ? carData.map(carListCard) : html`<p class="no-cars">No cars in database.</p>`}`;


const carListCard = (car) => html`
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
                </div>`;



export async function allListingPage(ctx){

    const carData = await getAllCars();


    ctx.render(carListingTemplate(carData));
}