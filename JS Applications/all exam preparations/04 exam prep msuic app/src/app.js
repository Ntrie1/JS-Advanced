import page from '../node_modules/page/page.mjs' 
import { render } from '../node_modules/lit-html/lit-html.js';
import { getUserData } from './util.js';
import { layoutTemplate } from './views/layout.js';
import { homePage } from './views/homePage.js';
import { loginPage } from './views/login.js';
import { registerPage } from './views/register.js';
import { logout } from './data/auth.js';
import { catalogPage } from './views/catalog.js';
import { createPage } from './views/create.js';
import { detailsPage } from './views/details.js';
import { editPage } from './views/edit.js';
import { searchPage } from './views/search.js';


const root = document.getElementById('box');

page(decorateCtx);
page('index.html', '/');
page('/', homePage);
page('/register', registerPage);
page('/login', loginPage);
page('/catalog', catalogPage);
page('/create', createPage);
page('/details/:id', detailsPage);
page('/edit/:id', editPage);
page('/search', searchPage);
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