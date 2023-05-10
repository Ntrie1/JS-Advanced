import page from '../../node_modules/page/page.mjs'
import { html, nothing } from '../../node_modules/lit-html/lit-html.js';

const guestLinks = html `<li class="nav-item">
<a class="nav-link" href="/login">Login</a>
</li>
<li class="nav-item">
  <a class="nav-link" href="/register">Register</a>
</li>`;

const privaeLinks =  html `
<li class="nav-item">
<a class="nav-link" href="/collection">My Collection</a>
</li>
 <li class="nav-item">
<a class="nav-link" href="/logout">Logout</a>
</li>`;

const searchHandler = (e) => {
    e.preventDefault();

    let formData = new FormData(e.currentTarget);

    let search = formData.get('search'); 

    page.redirect(`/movies?search=${search}`)
}


 export const navigationTemplate = ({user, isAuthenticated}) => html`
<nav class="navbar navbar-expand-lg navbar-light bg-light">
<a class="navbar-brand" href="/">Movies</a>
<button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
  <span class="navbar-toggler-icon"></span>
</button>

<div class="collapse navbar-collapse" id="navbarSupportedContent">
  <ul class="navbar-nav mr-auto">
    <li class="nav-item active">
      <a class="nav-link" href="/">Home <span class="sr-only">(current)</span></a>
    </li>
     ${isAuthenticated
     ? privaeLinks
     : guestLinks}
  </ul>

  ${isAuthenticated
     ? html`
     <div class="nav-item">
    <span class="nav-link disabled">${user.username}</span>
    </div>` 
    : nothing}
  
  <form class="form-inline my-2 my-lg-0" @submit=${searchHandler}>
    <input class="form-control mr-sm-2" type="search" name="search" placeholder="Search" aria-label="Search">
    <button class="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
  </form>
</div>
</nav>`;


// export const navigationView = (ctx) => {
//    return navigationTemplate(ctx.isAuthenticated);
// }


