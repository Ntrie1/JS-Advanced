import { del, get, post, put } from "./api.js";


export async function getAllAlbums(){
    return get('/data/albums?sortBy=_createdOn%20desc');
}

export async function addAlbum(data){
    return post('/data/albums', data)
}

export async function getAlbumById(albumId){
    return get(`/data/albums/${albumId}`)
}

export async function editAnAlbum(albumId, data){
    return put(`/data/albums/${albumId}`, data);
}

export async function deleteAnAlbum(albumId){
    return del(`/data/albums/${albumId}`);
}

export async function toLike(data){
    return post('/data/likes', { data })
}

export async function getMyLikes(albumId, userId){
    return get(`/data/likes?where=albumId%3D%22${albumId}%22%20and%20_ownerId%3D%22${userId}%22&count`)
}

export async function getLikesCount(albumId){
    return get(`/data/likes?where=albumId%3D%22${albumId}%22&distinct=_ownerId&count`)
}