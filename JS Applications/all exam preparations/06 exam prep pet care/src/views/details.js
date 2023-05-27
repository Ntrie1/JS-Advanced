import { html, nothing } from "../../node_modules/lit-html/lit-html.js";
import { addDonation, deletePetCard, getCertainPetData, getDonataionsForPetFromSpecifUser, getDonationCountPerPet } from "../data/services.js";
import { getUserData } from "../util.js";

//TODO replace acc template
const detailsTemplate = (petData, onDelete, onDonate, donation, userDonation) => html`
<section id="detailsPage">
<div class="details">
    <div class="animalPic">
        <img src=${petData.image}>
    </div>
    <div>
        <div class="animalInfo">
            <h1>Name: ${petData.name}</h1>
            <h3>Breed: ${petData.breed}</h3>
            <h4>Age: ${petData.age}</h4>
            <h4>Weight: ${petData.weight}</h4>
            <h4 class="donation">Donation: ${donation * 100}$</h4>
        </div>
        
        ${petData.isUser && petData.isOwner ? html` <div class="actionBtn">
        <!-- Only for registered user and creator of the pets-->
            <a href="/edit/${petData._id}" class="edit">Edit</a>
            <a @click=${onDelete} href="javascript:void(0)" class="remove">Delete</a>
        </div>` 
        : nothing}

        ${!petData.isOwner && petData.isUser && !userDonation
    ? html` <div class="actionBtn"> 
        <a @click=${onDonate} href="javascript:void(0)" class="donate">Donate</a>
        </div>` 
        : nothing}
       
      
    </div>
</div>
</section>`




export async function detailsPage(ctx){
    const petId = ctx.params.id;
    let user = await getUserData()?._id;
    const petData = await getCertainPetData(petId);

    let donation = await getDonationCountPerPet(petId);
    donation * 100;
    const userDonation = await getDonataionsForPetFromSpecifUser(petId, user)


    petData.isUser = user == undefined ? false : true;
    petData.isOwner = user == petData._ownerId ? true : false;
    
    ctx.render(detailsTemplate(petData, onDelete, onDonate, donation, userDonation));

    async function onDelete(){
        const choice = confirm('Are you sure you want to delete this?')
        if(choice){
            await deletePetCard(petId);
            ctx.page.redirect('/')
        }
    }

    async function onDonate(){
        await addDonation({petId});

        ctx.page.redirect(`/details/${petId}`)
    }



}