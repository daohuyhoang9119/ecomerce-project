
const ProductApi = {
    category(){
        return fetch('http://cfd-reactjs.herokuapp.com/categories',{
            method : 'GET'
        }).then(res => res.json);
    }
    
}

export default ProductApi;