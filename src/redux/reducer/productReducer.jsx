import { CATEGORY, PRODUCT, GET_NAME_CATEGORY, GET_VIEW_PRODUCT } from "../type";

let initState = {
    category: [],
    product: [],
    category_name:'',
    product_detail:{},
};

export default function productReducer(state = initState, action){
    switch(action.type){
        case CATEGORY:
            localStorage.setItem("catagories", JSON.stringify(action.payload));
            return{
                ...state,
                category: action.payload,
            };
        case PRODUCT:
            return{
                ...state,
                product: action.payload.data,
            };
        case GET_NAME_CATEGORY:
            return{
                ...state,
                category_name: action.payload.title,
            }
        case GET_VIEW_PRODUCT:
            return{
                ...state,
                product_detail: action.payload,
            }
        default: {
            return state;
        }
    }
    
};