import { del, get, post, put } from "./api.js";


export async function getAllShoesData(){
    return get('/data/shoes?sortBy=_createdOn%20desc');
}

export async function createShoePost(data){
    return post('/data/shoes', data)
}

export async function getCertainShoeData(shoeId){
    return get(`/data/shoes/${shoeId}`)
}

export async function editShoePost(shoeId, data){
    return put(`/data/shoes/${shoeId}`, data)
}

export async function deleteShoePost(shoeId){
    return del(`/data/shoes/${shoeId}`)
}

export async function searchShoe(query){
    return get(`/data/shoes?where=brand%20LIKE%20%22${query}%22`)
}