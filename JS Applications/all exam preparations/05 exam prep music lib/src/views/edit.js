import { html } from "../../node_modules/lit-html/lit-html.js";
import { editAnAlbum, getAlbumById } from "../data/services.js";
import { createSubmitHandler } from "../util.js";



const editTemplate = (album, onEdit) => html`
 <section id="edit">
        <div class="form">
          <h2>Edit Album</h2>
          <form class="edit-form" @submit=${onEdit}>
            <input type="text" name="singer" id="album-singer" .value=${album.singer} />
            <input type="text" name="album" id="album-album" .value=${album.album} />
            <input type="text" name="imageUrl" id="album-img" .value=${album.imageUrl} />
            <input type="text" name="release" id="album-release" .value=${album.release} />
            <input type="text" name="label" id="album-label" .value=${album.label} />
            <input type="text" name="sales" id="album-sales" .value=${album.sales} />

            <button type="submit">post</button>
          </form>
        </div>
      </section>`




export async function editPage(ctx){
    let albumId = ctx.params.id;
    let album = await getAlbumById(albumId);

     
    ctx.render(editTemplate(album, createSubmitHandler(onEdit)))

    async function onEdit({singer, album, imageUrl, release, label, sales }){
        if([singer, album, imageUrl, release, label, sales].some(filed => filed == '')){
            return alert('All fields are required!')
        }

        await editAnAlbum(albumId, { singer, album, imageUrl, release, label, sales })

        ctx.page.redirect(`/details/${albumId}`);
    }
   
    
}