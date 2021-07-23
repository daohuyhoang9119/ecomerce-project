import {ADD_TO_CART, REMOVE_PRODUCT_FROM_CART, INCREASE_PRODUCT, DECREASE_PRODUCT} from "../type";

let cart = JSON.parse(localStorage.getItem('listCart'));

let initState = {
    list: cart?.list || [],
    num: cart?.num || 0,
    amount: cart?.amount || 0,
}

export default function cartReducer(state = initState, action){
    switch(action.type){

        case ADD_TO_CART:
            let {list, num, amount} = state;





    }
}