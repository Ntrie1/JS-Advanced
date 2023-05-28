import page from '../node_modules/page/page.mjs' 
import { render } from '../node_modules/lit-html/lit-html.js';
import { getUserData } from './util.js';
import { layoutTemplate } from './views/layout.js';
import { homePage } from './views/homePage.js';
import { loginPage } from './views/login.js';
import { registerPage } from './views/register.js';
import { logout } from './data/auth.js';
import { catalogMemePage } from './views/catalogMemes.js';
import { createPage } from './views/create.js';
import { editPage } from './views/edit.js';
import { detailsPage } from './views/details.js';
import { profilePage } from './views/profile.js';


const root = document.getElementById('container');

page(decorateCtx);
page('index.html', '/');
page('/', homePage);
page('/catalog', catalogMemePage);
page('/login', loginPage);
page('/register', registerPage);
page('/create', createPage);
page('/profile', profilePage);
page('/details/:id', detailsPage);
page('/edit/:id', editPage);
page('/logout', logoutAction);


page.start();


function decorateCtx(ctx, next){
    ctx.render = renderView;

    next();
}


function renderView(content){
    let userData = getUserData()
     render(layoutTemplate(userData, content), root);
    
}


function logoutAction(ctx){
    logout();
    ctx.page.redirect('/')

}