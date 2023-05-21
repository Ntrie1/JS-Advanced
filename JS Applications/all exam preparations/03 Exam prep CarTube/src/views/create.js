import { html } from "../../node_modules/lit-html/lit-html.js";
import { createCarListing } from "../data/services.js";
import { createSubmitHandler } from "../util.js";



const createCarTemplate = (onCreate) => html`
<section id="create-listing">
<div class="container">
    <form @submit=${onCreate} id="create-form">
        <h1>Create Car Listing</h1>
        <p>Please fill in this form to create an listing.</p>
        <hr>

        <p>Car Brand</p>
        <input type="text" placeholder="Enter Car Brand" name="brand">

        <p>Car Model</p>
        <input type="text" placeholder="Enter Car Model" name="model">

        <p>Description</p>
        <input type="text" placeholder="Enter Description" name="description">

        <p>Car Year</p>
        <input type="number" placeholder="Enter Car Year" name="year">

        <p>Car Image</p>
        <input type="text" placeholder="Enter Car Image" name="imageUrl">

        <p>Car Price</p>
        <input type="number" placeholder="Enter Car Price" name="price">

        <hr>
        <input type="submit" class="registerbtn" value="Create Listing">
    </form>
</div>
</section>`;





export async function createPage(ctx){

    ctx.render(createCarTemplate(createSubmitHandler(onCreate)));

    async function onCreate({ brand, model, description, year, imageUrl, price }){
        if([brand, model, description,imageUrl].some(field => field == '')){
            return alert('All fields are required!');
        }
        if([year, price].some(x => x == '' ) && [year, price].some(x => x <= 0 )){
            return alert('the year and price fields must be postive numbers!')
        }

        await createCarListing({ brand, model, description, year, imageUrl, price });

        ctx.page.redirect('/all-listings')

    }



}