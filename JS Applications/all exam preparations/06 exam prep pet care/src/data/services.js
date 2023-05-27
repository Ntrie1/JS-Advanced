import { del, get, post, put } from "./api.js";



 export async function getAllPetsData(){
    return get('/data/pets?sortBy=_createdOn%20desc&distinct=name')
 }

 export async function createPetPost(data){
    return post('/data/pets', data)
 }

 export async function getCertainPetData(petId){
   return get(`/data/pets/${petId}`)
 }

 export async function editPetData(petId, data){
   return put(`/data/pets/${petId}`, data)
 }

 export async function deletePetCard(petId){
   return del(`/data/pets/${petId}`)
 }

 export async function addDonation(petId){
   return post('/data/donation', petId)
 }

 export async function getDonationCountPerPet(petId){
   return get(`/data/donation?where=petId%3D%22${petId}%22&distinct=_ownerId&count`)
 }

 export async function getDonataionsForPetFromSpecifUser(petId, userId){
   return get(`/data/donation?where=petId%3D%22${petId}%22%20and%20_ownerId%3D%22${userId}%22&count`)
 }