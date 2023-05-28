import { del, get, post, put } from "./api.js";


 export async function getAllMemes(){
    return get('/data/memes?sortBy=_createdOn%20desc');
 }

 export async function createMeme(data){
    return post('/data/memes', data);
 }

 export async function getMemeDetails(memeId){
   return get(`/data/memes/${memeId}`);
 } 

 export async function editMeme(memeId, data){
   return put(`/data/memes/${memeId}`, data);
 }

 export async function deleteMeme(memeId){
   return del(`/data/memes/${memeId}`)
 }

 export async function getUserMemes(userId){
  return get(`/data/memes?where=_ownerId%3D%22${userId}%22&sortBy=_createdOn%20desc`)
 }