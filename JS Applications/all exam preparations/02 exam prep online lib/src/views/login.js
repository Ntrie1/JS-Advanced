import { html } from "../../node_modules/lit-html/lit-html.js";
import { login } from "../data/auth.js";
import { createSubmitHandler } from "../util.js";

//TODO replace acc template
const loginTemplate = (onLogin) => html`
<section id="login-page" class="login">
            <form id="login-form" action="" method="" @submit=${onLogin}>
                <fieldset>
                    <legend>Login Form</legend>
                    <p class="field">
                        <label for="email">Email</label>
                        <span class="input">
                            <input type="text" name="email" id="email" placeholder="Email">
                        </span>
                    </p>
                    <p class="field">
                        <label for="password">Password</label>
                        <span class="input">
                            <input type="password" name="password" id="password" placeholder="Password">
                        </span>
                    </p>
                    <input class="button submit" type="submit" value="Login">
                </fieldset>
            </form>
        </section>`;




export const loginPage = (ctx)=>{
    ctx.render(loginTemplate(createSubmitHandler(onLogin)));

    //TODO change user obj based on the requirements
    async function onLogin({email, password}, form){
        await login(email, password);
        form.reset();

        //TODO redirect to where is said
        ctx.page.redirect('/')
    }

}