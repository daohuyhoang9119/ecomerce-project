import { CATEGORY, PRODUCT, GET_NAME_CATEGORY, GET_VIEW_PRODUCT, LOADING } from "../type";

let initState = {
    category: [],
    product: [],
    paginate: [],
    loading: false,
    category_name:'',
    product_detail:{},
};

export default function productReducer(state = initState, action){
    switch(action.type){
        case CATEGORY:
            localStorage.setItem("catagories", JSON.stringify(action.payload));
            return{
                ...state,
                loading:false,
                category: action.payload,
            };
        case PRODUCT:
            return{
                ...state,
                loading:false,
                paginate: action.payload.paginate,
                product: action.payload.data,
            };
        case LOADING:
            return{
                ...state,
                loading: true,
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