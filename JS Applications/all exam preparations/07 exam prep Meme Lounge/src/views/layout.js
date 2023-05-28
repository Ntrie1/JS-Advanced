import { html } from "../../node_modules/lit-html/lit-html.js";


export const layoutTemplate = (userData, content) => html`
<nav>
            
            ${userData 
                ? html`
                <a href="/catalog">All Memes</a>
                <div class="user">
            <a href="/create">Create Meme</a>
            <div class="profile">
                <span>Welcome, ${userData.email}</span>
                <a href="/profile">My Profile</a>
                <a href="/logout">Logout</a>
            </div>
        </div>` 
        : html`
        <a class="active" href="/">Home Page</a>
        <a href="/catalog">All Memes</a>
        <div class="guest">
        <div class="profile">
            <a href="/login">Login</a>
            <a href="/register">Register</a>
        </div>
    </div>`}
            
        </nav>

<main>
${content}
<main>

<footer class="footer">
<p>Created by SoftUni Delivery Team</p>
</footer>`;
