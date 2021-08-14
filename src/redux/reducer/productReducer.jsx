import { CATEGORY, PRODUCT, GET_NAME_CATEGORY, GET_VIEW_PRODUCT, LOADING } from "../type";

let initState = {
    categories: JSON.parse(localStorage.getItem("categories")) || [],
    product: JSON.parse(localStorage.getItem("localProduct")) || [],
    paginate: [],
    loading: true,
    category_name:'',
    product_detail:{},
    dataSearch: {},
};
export default function productReducer(state = initState, action){
    switch(action.type){
        case CATEGORY:
            return{
                ...state,
                categories: action.payload,
            };
        case PRODUCT:
            return{
                ...state,
                loading: false,
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