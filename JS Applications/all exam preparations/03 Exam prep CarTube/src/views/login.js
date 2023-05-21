import { html } from "../../node_modules/lit-html/lit-html.js";
import { login } from "../data/auth.js";
import { createSubmitHandler } from "../util.js";

//TODO replace acc template
const loginTemplate = (onLogin) => html`
<section id="login">
<div class="container">
    <form @submit=${onLogin} id="login-form" action="#" method="post">
        <h1>Login</h1>
        <p>Please enter your credentials.</p>
        <hr>

        <p>Username</p>
        <input placeholder="Enter Username" name="username" type="text">

        <p>Password</p>
        <input type="password" placeholder="Enter Password" name="password">
        <input type="submit" class="registerbtn" value="Login">
    </form>
    <div class="signin">
        <p>Dont have an account?
            <a href="#">Sign up</a>.
        </p>
    </div>
</div>
</section>`;




export const loginPage = (ctx)=>{
    ctx.render(loginTemplate(createSubmitHandler(onLogin)));

    //TODO change user obj based on the requirements
    async function onLogin({username, password}, form){
        await login(username, password);
        form.reset();

        //TODO redirect to where is said
        ctx.page.redirect('/all-listings')
    }

}