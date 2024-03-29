import { html } from "../../node_modules/lit-html/lit-html.js";
import { register } from "../data/auth.js";
import { createSubmitHandler } from "../util.js";

//TODO replace acc template
const registerTemplate = (onRegister) => html`
<section id="register-page" class="auth">
<form @submit=${onRegister} id="register">
    <h1 class="title">Register</h1>

    <article class="input-group">
        <label for="register-email">Email: </label>
        <input type="email" id="register-email" name="email">
    </article>

    <article class="input-group">
        <label for="register-password">Password: </label>
        <input type="password" id="register-password" name="password">
    </article>

    <article class="input-group">
        <label for="repeat-password">Repeat Password: </label>
        <input type="password" id="repeat-password" name="repeatPassword">
    </article>

    <input type="submit" class="btn submit-btn" value="Register">
</form>
</section>`;




export const registerPage = (ctx)=>{
    ctx.render(registerTemplate(createSubmitHandler(onRegister)));


    async function onRegister({email, password, repeatPassword}, form){
        if (email == '' || password == '' || repeatPassword == '') {
            return alert('All fields are required!')
        }
        if (password != repeatPassword) {
            return alert('Passowrds don\'t match')
        }

        await register(email, password);
        form.reset();

        //TODO redirect to where is said
        ctx.page.redirect('/')
    }

}