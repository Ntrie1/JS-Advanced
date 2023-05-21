import { html, nothing } from "../../node_modules/lit-html/lit-html.js";
import { getBookDetails, getLikesByBookId, deleteBook, getMyLikedBooks, likeABook } from "../data/services.js";
import { getUserData } from "../util.js";




const detailsTemplate = (book, userId, isOwner, likes, onDelete, myLikes, onLike) => html`
<section id="details-page" class="details">
<div class="book-information">
    <h3>${book.title}</h3>
    <p class="type">Type: ${book.type}</p>
    <p class="img"><img src="${book.imageUrl}"></p>
    <div class="actions">
        
    ${isOwner ? html  `<a class="button" href="/edit/${book._id}">Edit</a>
    <a @click=${onDelete} class="button" href="javascript:void(0)">Delete</a>` 
    : nothing}


        <!-- Bonus -->

        <!-- Like button ( Only for logged-in users, which is not creators of the current book ) -->
        ${userId && isOwner == false && !myLikes ? html`<a @click=${onLike} class="button" href="javascript:void(0)">Like</a>` : nothing}
    

        <!-- ( for Guests and Users )  -->
       ${isOwner == false || userId == undefined || userId ? html `<div class="likes">
       <img class="hearts" src="/images/heart.png">
       <span id="total-likes">Likes: ${likes}</span>
   </div>` : nothing}
      
        <!-- Bonus -->
    </div>
</div>
<div class="book-description">
    <h3>Description:</h3>
    <p>${book.description}</p>
</div>
</section>`;




export async function detailsPage (ctx){
    const bookId = ctx.params.id;
    const userId = getUserData()?._id;
    const book = await getBookDetails(bookId);
    const likes = await getLikesByBookId(bookId);
    const myLikes = await getMyLikedBooks(bookId, userId);

    let isOwner = true;

    if(book._ownerId !== userId){
        isOwner = false; 
            }
   
            ctx.render(detailsTemplate(book, userId, isOwner, likes, onDelete, myLikes, onLike));
         
            async function onDelete(){
                const choice = confirm('Are you sure?')
                if(choice){
                    await deleteBook(bookId);
                    ctx.page.redirect('/')
                }
            }

             async function onLike (){
                await likeABook(bookId)
                ctx.page.redirect('/details/' + bookId)
             }



       // ctx.page.redirect('/')
    }
