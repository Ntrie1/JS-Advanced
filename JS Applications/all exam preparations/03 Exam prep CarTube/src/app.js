import page from '../node_modules/page/page.mjs' 
import { render } from '../node_modules/lit-html/lit-html.js';
import { getUserData } from './util.js';
import { layoutTemplate } from './views/layout.js';
import { homePage } from './views/homePage.js';
import { loginPage } from './views/login.js';
import { registerPage } from './views/register.js';
import { logout } from './data/auth.js';
import { allListingPage } from './views/all-Listings.js';
import { createPage } from './views/create.js';
import { detialsPage } from './views/details.js';
import { editPage } from './views/edit.js';
import { myListingPage } from './views/my-Listing.js';
import { searchByYear } from './views/searchByYear.js';

const root = document.getElementById('container');

page(decorateCtx);
page('index.html', '/');
page('/', homePage);
page('/login', loginPage);
page('/register', registerPage);
page('/all-listings', allListingPage);
page('/by-year', searchByYear);
page('/create', createPage);
page('/edit/:id', editPage);
page('/details/:id', detialsPage);
page('/my-listing', myListingPage);
page('/logout', logoutAction);


page.start();


function decorateCtx(ctx, next){
    ctx.render = renderView;

    next();
}

// TODO inject dependencies if needed
function renderView(content){
    let userData = getUserData()
     render(layoutTemplate(userData, content), root);
    
}


function logoutAction(ctx){
    logout();
    ctx.page.redirect('/')

}