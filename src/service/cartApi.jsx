
const cartApi = {

    create(data){
        return fetch('http://cfd-reactjs.herokuapp.com/ecommerce/v1/cart',{}).then(res => res.json(data));
    }
}