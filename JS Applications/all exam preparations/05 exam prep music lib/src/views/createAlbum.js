// import { html } from "../../node_modules/lit-html/lit-html.js";
// import { addAlbum } from "../data/services.js";
// import { createSubmitHandler } from "../util.js";


// const createTemplate = (onCreate) =>html`
// <section id="create">
// <div class="form">
//   <h2>Add Album</h2>
//   <form @submit=${onCreate} class="create-form">
//     <input type="text" name="singer" id="album-singer" placeholder="Singer/Band" />
//     <input type="text" name="album" id="album-album" placeholder="Album" />
//     <input type="text" name="imageUrl" id="album-img" placeholder="Image url" />
//     <input type="text" name="release" id="album-release" placeholder="Release date" />
//     <input type="text" name="label" id="album-label" placeholder="Label" />
//     <input type="text" name="sales" id="album-sales" placeholder="Sales" />

//     <button type="submit">post</button>
//   </form>
// </div>
// </section>`




// export async function createPage(ctx){

//     ctx.render(createTemplate(createSubmitHandler(onCreate)))

   
//     async function onCreate({ singer, album, imageUrl, release, label, sales }){
//         if([singer, album, imageUrl, release, label, sales].some(fields => fields == '')){
//             return alert('All fields must be filled!')
//         }

//         await addAlbum({singer, album, imageUrl, release, label, sales})

//         ctx.page.redirect('/dashboard')

//     }


// }



import { html, render } from '../../node_modules/lit-html/lit-html.js';
import page from '../../node_modules/page/page.mjs';
import { get, post } from '../data/api.js'
const main = document.querySelector('main');
const header = document.querySelector('header');

export function createPage(ctx) {
    ctx.render(template());
}

const template = () => html`
<!-- Create Page (Only for logged-in users) -->
<section id="create">
  <div class="form">
    <h2>Add Album</h2>
    <form class="create-form" @submit=${onSubmit}>
      <input type="text" name="singer" id="album-singer" placeholder="Singer/Band" />
      <input type="text" name="album" id="album-album" placeholder="Album" />
      <input type="text" name="imageUrl" id="album-img" placeholder="Image url" />
      <input type="text" name="release" id="album-release" placeholder="Release date" />
      <input type="text" name="label" id="album-label" placeholder="Label" />
      <input type="text" name="sales" id="album-sales" placeholder="Sales" />
      <button type="submit">post</button>
    </form>
  </div>
</section>
`;

async function onSubmit(e) {
    e.preventDefault();
    const data = new FormData(e.target);
    const singer = data.get('singer');
    const album = data.get('album');
    const imageUrl = data.get('imageUrl');
    const release = data.get('release');
    const label = data.get('label');
    const sales = data.get('sales');
    if (!singer || !album || !imageUrl || !release || !label || !sales) {
        return alert('all need')
    }
    const response = await post('/data/albums', { singer, album, imageUrl, release, label, sales });
    page.redirect('/dashboard');
}