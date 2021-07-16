import { CATEGORY } from "../type";

let initState = {
    category: [],
};

export default function productReducer(state = initState, action){
    switch(action.type){
        case CATEGORY:
            localStorage.setItem("catagories", JSON.stringify(action.payload));
            return{
                ...state,
                category: action.payload,
            };
        default: {
            return state;
        }
    }
    
};