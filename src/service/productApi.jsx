
const ProductApi = {
    category(){
        
        return fetch('http://cfd-reactjs.herokuapp.com/categories',{}).then(res => res.json());
    }
    
}

export default ProductApi;