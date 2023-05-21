import { html } from "../../node_modules/lit-html/lit-html.js";
import { editCar, getCarById } from "../data/services.js";
import { createSubmitHandler } from "../util.js";

const editTemplate = (car, onEdit) => html`
<section id="edit-listing">
<div class="container">

    <form @submit=${onEdit} id="edit-form">
        <h1>Edit Car Listing</h1>
        <p>Please fill in this form to edit an listing.</p>
        <hr>

        <p>Car Brand</p>
        <input type="text" placeholder="Enter Car Brand" name="brand" .value="${car.brand}">

        <p>Car Model</p>
        <input type="text" placeholder="Enter Car Model" name="model" .value="${car.model}">

        <p>Description</p>
        <input type="text" placeholder="Enter Description" name="description" .value="${car.description}">

        <p>Car Year</p>
        <input type="number" placeholder="Enter Car Year" name="year" .value="${car.year}">

        <p>Car Image</p>
        <input type="text" placeholder="Enter Car Image" name="imageUrl" .value="${car.imageUrl}">

        <p>Car Price</p>
        <input type="number" placeholder="Enter Car Price" name="price" .value="${car.price}">

        <hr>
        <input type="submit" class="registerbtn" value="Edit Listing">
    </form>
</div>
</section>`


 export async function editPage(ctx){
   
    const carId = ctx.params.id;

    console.log(carId);

    const carData = await getCarById(carId);


    ctx.render(editTemplate(carData, createSubmitHandler(onEdit)));


    async function onEdit({ brand, model, description, year, imageUrl, price }){
        if([brand, model, description,imageUrl].some(field => field == '')){
            return alert('All fields are required!');
        }
        if([year, price].some(x => x == '' ) && [year, price].some(x => x <= 0 )){
            return alert('the year and price fields must be postive numbers!')
        }

        await editCar(carId, { brand, model, description, year, imageUrl, price });

        ctx.page.redirect(`/details/${carId}`);

    }








 }