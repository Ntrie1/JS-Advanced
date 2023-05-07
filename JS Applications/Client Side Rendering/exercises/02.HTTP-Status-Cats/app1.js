import { html, render } from "../node_modules/lit-html/lit-html.js";
import { cats } from "./catSeeder.js";

let allCats = document.getElementById('allCats');

//allCats.addEventListener('click', toggle);

const templateCats = (data) => html`<ul>
${data.map(cat => html`
<li>
                <img src="./images/${cat.imageLocation}.jpg" width="250" height="250" alt="Card image cap">
                <div class="info">
                    <button class="showBtn" @click = ${toggle}>Show status code</button>
                    <div class="status" style="display: none" id=${cat.id}>
                        <h4>Status Code: ${cat.statusCode}</h4>
                        <p>${cat.statusMessage}</p>
                    </div>
                </div>
            </li>`)}
</ul>`;




function update(){
    const res = templateCats(cats)
    render(res, allCats)
}
update();

function toggle(e){
    e.preventDefault();
    let cat = e.target.parentNode;
    let res = cat.querySelector('.status').style.display;
    

    if(res == 'block'){
        cat.querySelector('.showBtn').textConent = 'Show status code';
        cat.querySelector('.status').style.display = 'none';
    } 
    else {
        cat.querySelector('.showBtn').textConent = 'Hide status code';
        cat.querySelector('.status').style.display = 'block';
    }


}