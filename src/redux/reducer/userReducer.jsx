import {ADD_WISHLIST, REMOVE_WISHLIST} from "../type";


let initState = {
    wishList: JSON.parse(localStorage.getItem("WishList")) || [],
}

export default function userReducer(state = initState, action){
    
    switch(action.type){
        case ADD_WISHLIST:{
           let {wishList} = state;
           let item = action.payload;

           wishList.push(item);
           console.log(wishList);
           localStorage.setItem("WishList", JSON.stringify(wishList));
           return {
               ...state,
               wishList
           };

        }
        case REMOVE_WISHLIST:{
            let { wishList } = state;
            
            const index = wishList.findIndex((e) => e._id === action.payload._id);            
            wishList.splice(index, 1);
            localStorage.setItem("WishList", JSON.stringify(wishList));
            return {
                ...state,
                wishList,
            }
        }

        
        default:
            return state;
    }
}