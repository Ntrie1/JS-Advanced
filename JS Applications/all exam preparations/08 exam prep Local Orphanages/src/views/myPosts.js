import { html } from "../../node_modules/lit-html/lit-html.js";
import { getUserPosts } from "../data/services.js";
import { getUserData } from "../util.js";

const myPostsTemplate = (userPosts) => html`
<section id="my-posts-page">
<h1 class="title">My Posts</h1>
<div class="my-posts">

${userPosts.length > 0 
? userPosts.map(postCard)
: html`<h1 class="title no-posts-title">You have no posts yet!</h1> `}

</div>
</section>`

const postCard = (post) => html`
<div class="post">
<h2 class="post-title">${post.title}</h2>
 <img class="post-image" src=${post.imageUrl} alt="Material Image">
  <div class="btn-wrapper">
  <a href="/details/${post._id}" class="details-btn btn">Details</a>
  </div>
  </div>`




 export async function myPostsPage(ctx){

    const userId = await getUserData()?._id;
    const userPosts = await getUserPosts(userId);
   
    ctx.render(myPostsTemplate(userPosts))

 }