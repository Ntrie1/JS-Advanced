import { html } from "../../node_modules/lit-html/lit-html.js";
import { editShoePost, getCertainShoeData } from "../data/servises.js";
import { createSubmitHandler } from "../util.js";



const editTemplate = (shoeData, onEdit) => html`
<section id="edit">
<div class="form">
  <h2>Edit item</h2>
  <form @submit=${onEdit} class="edit-form">
    <input
      type="text"
      name="brand"
      id="shoe-brand"
      placeholder="Brand"
      .value=${shoeData.brand}
    />
    <input
      type="text"
      name="model"
      id="shoe-model"
      placeholder="Model"
      .value=${shoeData.model}
    />
    <input
      type="text"
      name="imageUrl"
      id="shoe-img"
      placeholder="Image url"
      .value=${shoeData.imageUrl}
    />
    <input
      type="text"
      name="release"
      id="shoe-release"
      placeholder="Release date"
      .value=${shoeData.release}
    />
    <input
      type="text"
      name="designer"
      id="shoe-designer"
      placeholder="Designer"
      .value=${shoeData.designer}
    />
    <input
      type="text"
      name="value"
      id="shoe-value"
      placeholder="Value"
      .value=${shoeData.value}
    />

    <button type="submit">post</button>
  </form>
</div>
</section>`




export async function editPage(ctx){
    const shoeId = ctx.params.id;
    const shoeData = await getCertainShoeData(shoeId)
   
   
   
    ctx.render(editTemplate(shoeData, createSubmitHandler(onEdit)));

    async function onEdit({brand, model, imageUrl, release, designer, value}){
        if([brand, model, imageUrl, release, designer, value].some(field => field == '')){
            return alert('All fields must be filled!')
        }

        await editShoePost(shoeId, {brand, model, imageUrl, release, designer, value})
        ctx.page.redirect(`/details/${shoeId}`)
   
    }
}