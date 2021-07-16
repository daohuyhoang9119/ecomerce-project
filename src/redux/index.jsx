import { createStore, combineReducers, applyMiddleware, compose } from "redux";

import authReducer from "./reducer/authReducer";
import productReducer from "./reducer/productReducer";

let reducer = combineReducers({
  authReducer,
  productReducer,
});

const middleware = (store) => (next) => (action) => {
  if (typeof action === "function") {
    return action(store.dispatch);
  } else {
    next(action);
  }
};
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

let store = createStore(reducer, composeEnhancers(applyMiddleware(middleware)));
export default store;
