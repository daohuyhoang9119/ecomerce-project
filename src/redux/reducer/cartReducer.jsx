import {ADD_TO_CART, REMOVE_PRODUCT_FROM_CART, INCREASE_PRODUCT, DECREASE_PRODUCT} from "../type";

const listCart = JSON.parse(localStorage.getItem("cart")) || [];
const num = listCart.length;
const amount = JSON.parse(localStorage.getItem("amount")) || 0;

let initState = {
    listCart: listCart,
    num: num,
    amount: amount,
}

export default function cartReducer(state = initState, action){
    
    switch(action.type){
        case ADD_TO_CART:
            let {listCart, num, amount} = state;
            const index = listCart.findIndex((e) => e._id === action.payload._id);
            console.log(`list cart: ${listCart}`);
            console.log(`num : ${num}`);
            console.log(`amount: ${amount}`);
            console.log(`index: ${index}`);

            if(index !== -1){
                //index !== -1 => Bị trùng thì nó cộng dồn vào
                action.payload.numCart = action.payload.num || 1;
                console.log('vô đây là index !=== -1 => trùng => cộng dồn');
                console.log(action.payload.numCart);

                listCart[index].numCart =listCart[index].numCart + action.payload.numCart;
                
                amount = amount + listCart[index].real_price * action.payload.numCart;
            } else {
                //index === -1 => không có bị trùng thì nó add vào
                action.payload.numCart = action.payload.num || 1;
                console.log('vô đây là index ==== -1 => thì add nó vào');
                listCart.push(action.payload);
                amount = amount + action.payload.real_price * action.payload.numCart;
            }
            localStorage.setItem("cart", JSON.stringify(listCart));
            localStorage.setItem("amount", JSON.stringify(amount));
            return {
                ...state,
                num: num + action.payload.numCart,
                listCart,
                amount,
            };
        
    
        default:
            return state;




    }
}