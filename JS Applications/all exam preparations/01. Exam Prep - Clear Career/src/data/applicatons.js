import { get, post } from "./api.js";

const endpints = {
    applications: '/data/applications' ,
    byOfferId: offerId  => `/data/applications?where=offerId%3D%22${offerId}%22&distinct=_ownerId&count`,
    byOfferIdAndUserId: (offerId, userId) => `/data/applications?where=offerId%3D%22${offerId}%22%20and%20_ownerId%3D%22${userId}%22&count`
};

 

 export async function apply(offerId){
   return post(endpints.applications, { offerId });
 }

  export async function getApplications(offerId){
    return get(endpints.byOfferId(offerId));
  }

  export async function getUserApplication(offerId, userId){
    return get(endpints.byOfferIdAndUserId(offerId, userId));
  }