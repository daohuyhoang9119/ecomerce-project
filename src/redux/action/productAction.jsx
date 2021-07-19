import ProductApi from "../../service/productApi";
import { CATEGORY, GET_VIEW_PRODUCT, PRODUCT } from "../type";

export function categoryAction(){
    return async (dispatch) => {
        let res = await ProductApi.category();
        
        if(res){
            dispatch({
               type: CATEGORY,
               payload: res,
            });
        }

    };
}
export function productAction(url){
    return async (dispatch)=>{
        let res = await ProductApi.product(url);
        if(res){
            dispatch({
                type: PRODUCT,
                payload : res,
            })
        }
    }
}

export function productViewAction(data){
    return {
        type: GET_VIEW_PRODUCT,
        payload :data,
    }
}