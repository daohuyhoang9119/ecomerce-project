import {ADD_TO_CART, REMOVE_PRODUCT_FROM_CART, INCREASE_PRODUCT, DECREASE_PRODUCT} from "../type";

export function addCart(cart) {
    return {
      type: ADD_TO_CART,
      payload: cart,
    };
}

export function removeCart(id){
    return {
        type: REMOVE_PRODUCT_FROM_CART,
        payload: id,
    };
}

export function increase(id){
    return {
        type: INCREASE_PRODUCT,
        payload :id,
    };
}

export function decrease(id){
    return {
        type: DECREASE_PRODUCT,
        payload :id,
    };
}