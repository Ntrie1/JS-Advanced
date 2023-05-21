import page from '../node_modules/page/page.mjs' 
import { render } from '../node_modules/lit-html/lit-html.js';
import { getUserData } from './util.js';
import { layoutTemplate } from './views/layout.js';
import { homePage } from './views/homePage.js';
import { loginPage } from './views/login.js';
import { registerPage } from './views/register.js';
import { logout } from './data/auth.js';
import { catalogPage } from './views/catalog.js';
import { detailsPage } from './views/details.js';
import { createPage } from './views/create.js';
import { editPage } from './views/edit.js';

import * as api from './data/applicatons.js';
window.api =  api;



const root = document.getElementById('wrapper');

page(decorateCtx);
page('index.html', '/');
page('/', homePage);
page('/catalog', catalogPage);
page('/catalog/:id', detailsPage);
page('/login', loginPage);
page('/register', registerPage);
page('/create', createPage);
page('/catalog/:id/edit', editPage);
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