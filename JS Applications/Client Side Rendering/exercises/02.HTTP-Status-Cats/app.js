import { html, render } from '../node_modules/lit-html/lit-html.js';
import { styleMap } from '../node_modules/lit-html/directives/style-map.js'
import { cats } from './catSeeder.js'

let allCats = document.getElementById('allCats');

allCats.addEventListener('click', toggle);



const templateFunc = (data) =>
html`<ul>
${data.map(cat => html`<li>
<img src="./images/${cat.imageLocation}.jpg" width="250" height="250" alt="Card image cap">
<div class="info">
<button class="showBtn">${cat.info ? 'Hide' : 'Show'} status code</button>
<div class="status" style=${styleMap(cat.info ? {display: 'block'} : {display: 'none'})} id="${cat.id}">
<h4>Status Code: ${cat.statusCode}</h4>
<p>${cat.statusMessage}</p>
</div>
</div>
</li>`)}
</ul>`

cats.forEach(c => c.info == false);

update()
function update (){
    const res =  templateFunc(cats);
    render(res, allCats)
}

function toggle(e){
let elementId = e.target.parentElement.querySelector('.status').id;
const cat = cats.find(c => c.id == elementId);
cat.info = !cat.info
update();

}
