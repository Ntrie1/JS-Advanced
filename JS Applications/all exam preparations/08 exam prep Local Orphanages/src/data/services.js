import { del, get, post, put } from "./api.js";



export async function getAllMaterials(){
    return get('/data/posts?sortBy=_createdOn%20desc')
}

export async function createPost(data){
    return post('/data/posts', data)
}

export async function getSpecificItemById(itemId){
    return get(`/data/posts/${itemId}`)
}

export async function editPost(itemId, data){
    return put(`/data/posts/${itemId}`, data)
}

export async function deletePost(itemId){
    return del(`/data/posts/${itemId}`)
}

export async function getUserPosts(userId){
    return get(`/data/posts?where=_ownerId%3D%22${userId}%22&sortBy=_createdOn%20desc`)
}

export async function makeDonation(postId){
    return post('/data/donations', { postId })
}

export async function getTotalDonationsCount(postId){
    return get(`/data/donations?where=postId%3D%22${postId}%22&distinct=_ownerId&count`)
}

export async function getUserDonation(postId, userId){
    return get(`/data/donations?where=postId%3D%22${postId}%22%20and%20_ownerId%3D%22${userId}%22&count`)
}

