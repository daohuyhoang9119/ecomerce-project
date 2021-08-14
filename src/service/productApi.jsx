
import { api } from "./config";
const ProductApi = {
    category(){
        // return fetch('http://cfd-reactjs.herokuapp.com/categories',{}).then(res => res.json());
        return api.get(`categories`);
    },
    product(slug){
        // return fetch(`http://cfd-reactjs.herokuapp.com/product?${slug}`,{}).then(res => res.json());
        return api.get(`product?${slug}`);
    },
    productView(slug){
        // return fetch(`http://cfd-reactjs.herokuapp.com/product?slug=${slug}`,{}).then(res => res.json());
        return api.get(`product?slug=${slug}`);
    },
    searchProduct(slug){
        return fetch(`http://cfd-reactjs.herokuapp.com/product?search=${slug}`,{}).then(res => res.json);
    }
    
}

export default ProductApi;