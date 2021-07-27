
const ProductApi = {
    category(){
        
        return fetch('http://cfd-reactjs.herokuapp.com/categories',{}).then(res => res.json());
    },
    product(slug){
        return fetch(`http://cfd-reactjs.herokuapp.com/product?${slug}`,{}).then(res => res.json());
    },
    productView(slug){
        return fetch(`http://cfd-reactjs.herokuapp.com/product?slug=${slug}`,{}).then(res => res.json());
    },
    searchProduct(slug){
        return fetch(`http://cfd-reactjs.herokuapp.com/product?search=${slug}`,{}).then(res => res.json);
    }
    
}

export default ProductApi;