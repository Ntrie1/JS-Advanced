import { del, get, post, put } from "./api.js";



 export async function getAllAlbums(){
    return get('/data/albums?sortBy=_createdOn%20desc&distinct=name');
 }

 export async function createAlbum(data){
    return post('/data/albums', data)
 }

 export async function getAlbumById(albumId){
   return get(`/data/albums/${albumId}`)
 }

 export async function deleteAlbum(albumId){
   return del(`/data/albums/${albumId}`)
 }

 export function editAlbum(albumId, data){
   return put(`/data/albums/${albumId}`, data)
 }

 export function searchAlbum(query){
   return get(`/data/albums?where=name%20LIKE%20%22${query}%22`);
 }



