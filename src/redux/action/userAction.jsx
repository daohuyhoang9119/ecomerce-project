import {ADD_WISHLIST, REMOVE_WISHLIST} from "../type";

export function addWishList(item){
    return {
        type: ADD_WISHLIST,
        payload: item,
    }
}
export function removeWishList(id){
    return {
        type: REMOVE_WISHLIST,
        payload: id,
    }
}