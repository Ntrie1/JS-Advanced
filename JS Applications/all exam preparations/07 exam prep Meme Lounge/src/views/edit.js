import { html } from "../../node_modules/lit-html/lit-html.js";
import { editMeme, getMemeDetails } from "../data/services.js";
import { createSubmitHandler } from "../util.js";


const editTemplate = (memeData, onEdit) =>html`
<section id="edit-meme">
<form @submit=${onEdit} id="edit-form">
    <h1>Edit Meme</h1>
    <div class="container">
        <label for="title">Title</label>
        <input id="title" type="text" placeholder="Enter Title" name="title" .value=${memeData.title}>
        <label for="description">Description</label>
        <textarea id="description" placeholder="Enter Description" name="description" .value=${memeData.description}>
            </textarea>
        <label for="imageUrl">Image Url</label>
        <input id="imageUrl" type="text" placeholder="Enter Meme ImageUrl" name="imageUrl" .value=${memeData.imageUrl}>
        <input type="submit" class="registerbtn button" value="Edit Meme">
    </div>
</form>
</section>`




 export async function editPage(ctx){

    let memeId = ctx.params.id;
    let memeData = await getMemeDetails(memeId)

    ctx.render(editTemplate(memeData, createSubmitHandler(onEdit)))

     async function onEdit({ title, description, imageUrl }){
        if([title, description, imageUrl].some(x => x == '')){
            return alert('All fileds are required!')
        }

        await editMeme(memeId, { title, description, imageUrl });
        ctx.page.redirect(`/details/${memeId}`)

     }
    

 }