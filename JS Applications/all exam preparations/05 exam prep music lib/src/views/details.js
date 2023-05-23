import { html, nothing } from "../../node_modules/lit-html/lit-html.js";
import { deleteAnAlbum, getAlbumById, getLikesCount, getMyLikes, toLike } from "../data/services.js";
import { getUserData } from "../util.js";


const detailsTemplate = (album, userId, isOwner, likes, onDelete, myLikes, onLike) =>html`
<section id="details">
<div id="details-wrapper">
  <p id="details-title">Album Details</p>
  <div id="img-wrapper">
    <img src=${album.imageUrl} alt="example1" />
  </div>
  <div id="info-wrapper">
    <p><strong>Band:</strong><span id="details-singer">${album.singer}</span></p>
    <p>
      <strong>Album name:</strong><span id="details-album">${album.album}</span>
    </p>
    <p><strong>Release date:</strong><span id="details-release">${album.release}</span></p>
    <p><strong>Label:</strong><span id="details-label">${album.label}</span></p>
    <p><strong>Sales:</strong><span id="details-sales">${album.sales}</span></p>
  </div>
  <div id="likes">Likes: <span id="likes-count">${likes}</span></div>

  <!--Edit and Delete are only for creator-->
  ${isOwner ? html` <div id="action-buttons">
  <a href="/edit/${album._id}" id="edit-btn">Edit</a>
  <a @click=${onDelete} href="javascript:void(0)" id="delete-btn">Delete</a>
</div>` : nothing }

${userId && !isOwner && !myLikes ? html`<div id="action-buttons"> <a @click=${onLike} href="javascript:void(0)" id="like-btn">Like</a> </div>` : nothing}

</div>
</section>`


 export async function detailsPage (ctx){
    const albumId = ctx.params.id;
    const userId = getUserData()?._id;
    const album = await getAlbumById(albumId);
    const likes = await getLikesCount(albumId);
    const myLikes = await getMyLikes(albumId, userId);

    let isOwner = true;

    if(album._ownerId !== userId){
        isOwner = false; 
            }
   
            ctx.render(detailsTemplate(album, userId, isOwner, likes, onDelete, myLikes, onLike));
         
            async function onDelete(){
                const choice = confirm('Are you sure?')
                if(choice){
                    await deleteAnAlbum(albumId);
                    ctx.page.redirect('/dashboard');
                }
            }

             async function onLike (){
                await toLike(albumId)
                ctx.page.redirect(`/details/${albumId}`);
             }



       // ctx.page.redirect('/')
    }