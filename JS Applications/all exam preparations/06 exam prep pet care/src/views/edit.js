import { html } from "../../node_modules/lit-html/lit-html.js";
import { editPetData, getCertainPetData } from "../data/services.js";
import { createSubmitHandler } from "../util.js";

//TODO replace acc template
const editTemplate = (petData, onEdit) => html`
<section id="editPage">
<form @submit=${onEdit} class="editForm">
    <img src="./images/editpage-dog.jpg">
    <div>
        <h2>Edit PetPal</h2>
        <div class="name">
            <label for="name">Name:</label>
            <input name="name" id="name" type="text" .value=${petData.name}>
        </div>
        <div class="breed">
            <label for="breed">Breed:</label>
            <input name="breed" id="breed" type="text" .value=${petData.breed}>
        </div>
        <div class="Age">
            <label for="age">Age:</label>
            <input name="age" id="age" type="text" .value=${petData.age}>
        </div>
        <div class="weight">
            <label for="weight">Weight:</label>
            <input name="weight" id="weight" type="text" .value=${petData.weight}>
        </div>
        <div class="image">
            <label for="image">Image:</label>
            <input name="image" id="image" type="text" .value=${petData.image}>
        </div>
        <button class="btn" type="submit">Edit Pet</button>
    </div>
</form>
</section>`




export async function editPage (ctx){
    const petId = ctx.params.id;
    const petData = await getCertainPetData(petId)


    ctx.render(editTemplate(petData, createSubmitHandler(onEdit)));

    async function onEdit({ name, breed, age, weight, image }){
        if([name, breed, age, weight, image].some(x => x == '')){
            return alert('All fields must be filled!')
        }
        await editPetData(petId, { name, breed, age, weight, image })
        ctx.page.redirect(`/details/${petId}`)
    }


}