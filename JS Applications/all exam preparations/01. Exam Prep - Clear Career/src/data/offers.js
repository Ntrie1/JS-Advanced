import { del, get, post, put } from "./api.js";

const endpints = {
    catalog: '/data/offers?sortBy=_createdOn%20desc',
    byId: '/data/offers/'
}


 export async function getAllOffers(){
    return get(endpints.catalog);
 }

 export async function getById(id){
    return get(endpints.byId + id);
 }

 export async function createOffer(data){
    return post(endpints.catalog, data);
 }


 export async function updateOffer(id, data){
    return put(endpints.byId + id, data);
 }

 export async function deleteOffer(id){
    return del(endpints.byId + id);
 }