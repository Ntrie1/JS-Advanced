import { html } from "../../node_modules/lit-html/lit-html.js";
import { getBookById } from "../data/services.js";
import { getUserData } from "../util.js";


const bookTemplate = (book) => html`
<section id="my-books-page" class="my-books">
<h1>My Books</h1>
<!-- Display ul: with list-items for every user's books (if any) -->
<ul class="my-books-list">
 ${book.length > 0 ? book.map(bookCard) : html`<p class="no-books">No books in database!</p>`}
</ul>`;


const bookCard = (book) => html`
<li class="otherBooks">
<h3>${book.title}</h3>
<p>Type: ${book.type}</p>
<p class="img"><img src=${book.imageUrl}></p>
<a class="button" href="/details/${book._id}">Details</a>
</li>`;




export async function myBooksPage(ctx){

    const id = getUserData()._id;

    const book = await getBookById(id);

    console.log(book);

    ctx.render(bookTemplate(book));
}