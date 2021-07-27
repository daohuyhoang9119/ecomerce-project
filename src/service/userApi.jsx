const userApi = {

    create(data){
        return fetch('http://cfd-reactjs.herokuapp.com/ecommerce/v1/profile/wishlist',{}).then(res => res.json(data));
    }
}