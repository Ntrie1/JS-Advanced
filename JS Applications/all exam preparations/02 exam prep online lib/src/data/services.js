import { post, put, del, get } from "./api.js";

 export async function getAllBook(){
    return await get('/data/books?sortBy=_createdOn%20desc');
 }

  export async function getBookById(userId){
    return await get(`/data/books?where=_ownerId%3D%22${userId}%22&sortBy=_createdOn%20desc`);
  }


  export async function createBook(data){
    return await post('/data/books', data);
  }


  export async function getBookDetails(userId){
    return await get('/data/books/' + userId);
  }


  export async function likeABook(bookId){
    return await post('/data/likes/', { bookId } );
  }


  export async function getLikesByBookId(bookId){
    return await get(`/data/likes?where=bookId%3D%22${bookId}%22&distinct=_ownerId&count`);
  }


  export async function getMyLikedBooks(bookId, userId){
    return await get(`/data/likes?where=bookId%3D%22${bookId}%22%20and%20_ownerId%3D%22${userId}%22&count`);
  }

  export async function deleteBook(bookId){
    return await del('/data/books/' + bookId);
  }

  export async function editBook(bookId, data){
    return await put('/data/books/' + bookId, data)
  }