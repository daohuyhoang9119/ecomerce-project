import { createStore, combineReducers, applyMiddleware, compose } from "redux";

import authReducer from "./reducer/authReducer";
import productReducer from "./reducer/productReducer";
import cartReducer from './reducer/cartReducer';
import userReducer from './reducer/userReducer';

let reducer = combineReducers({
  authReducer,
  productReducer,
  cartReducer,
  userReducer,  
});

//tự định nghĩa 1 middleware
const middleware = (store) => (next) => (action) => {
  //function bên trong action, bth action là 1 object nhưng mờ khi gọi api nó là 1 async function 
  if (typeof action === "function") {
    return action(store.dispatch);
    //truyền dispatch vào trong cái function ở trong action đó

  } else {
    next(action);
  }
};
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

let store = createStore(reducer, composeEnhancers(applyMiddleware(middleware)));
export default store;
