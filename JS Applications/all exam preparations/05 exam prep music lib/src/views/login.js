import { html } from "../../node_modules/lit-html/lit-html.js";
import { login } from "../data/auth.js";
import { createSubmitHandler } from "../util.js";


const loginTemplate = (onLogin) => html`
<section id="login">
<div class="form">
  <h2>Login</h2>
  <form class="login-form" @submit=${onLogin}>
    <input type="text" name="email" id="email" placeholder="email" />
    <input type="password" name="password" id="password" placeholder="password" />
    <button type="submit">login</button>
    <p class="message">
      Not registered? <a href="/register">Create an account</a>
    </p>
  </form>
</div>
</section>`;




export const loginPage = (ctx)=>{
    ctx.render(loginTemplate(createSubmitHandler(onLogin)));

    //TODO change user obj based on the requirements
    async function onLogin({email, password}, form){
        await login(email, password);
        form.reset();

        //TODO redirect to where is said
        ctx.page.redirect('/dashboard')
    }

}