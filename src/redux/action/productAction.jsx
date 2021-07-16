import ProductApi from "../../service/productApi";
import { CATEGORY } from "../type";

export function categoryAction(){
    return async (dispatch)=>{
        let res = await ProductApi.category();
        console.log(res);
        if(res){
            dispatch({
               type: CATEGORY,
               payload: res,
            });
        }

    };
}