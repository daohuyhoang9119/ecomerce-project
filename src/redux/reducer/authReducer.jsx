import { ERROR, LOGIN, LOGOUT, UPDATE, REGISTER,REGISTER_ERROR, ADD_WISHLIST, REMOVE_WISHLIST } from "../type";

// import reduxToolkit from "../../core/reduxToolkit";
// import Auth from "../../service/auth";
// import userApi from "../../service/userApi";

// let user = JSON.parse(localStorage.getItem("login"));

let initState = {
  login: JSON.parse(localStorage.getItem("login")) || false,
  data: JSON.parse(localStorage.getItem("data")) || false,
  loginError: "",
  regisError:"",
  regisSuccess: "",
  error: null,
  // wishList: JSON.parse(localStorage.getItem('WishList') || []),
  // wishList: JSON.parse(localStorage.getItem("WishList")) || [],
};

export default function authReducer(state = initState, action) {
  switch (action.type) {
    case LOGIN:
      return {
        ...state,
        login: true,
      };
    case LOGOUT:
      localStorage.clear();
      return {
        ...state,
        login: false,
      };
    case REGISTER:
      // let regisSuccess = state.regisSucces;
      // regisSuccess = 'Congratulations register successful!!! Please login again!';
      return {
        ...state,
        data: action.payload,
        regisSuccess: 'Congratulations register successful!!! Please login again!',
        regisError : "",
      };
    case REGISTER_ERROR:
      return {
        ...state,
        regisError: action.payload,
        regisSuccess: "",
      }
    case ERROR:
      return {
        ...state,
        loginError: action.payload,
      };
    case UPDATE:
      // localStorage.setItem("login", JSON.stringify(action.payload));
      return {
        ...state,
        login: action.payload,
      };
    // case REMOVE_WISHLIST:{
    //   let { wishList } = state;
      
    //   const index = wishList.findIndex((e) => e._id === action.payload._id);            
    //   wishList.splice(index, 1);
    //   localStorage.setItem("WishList", JSON.stringify(wishList));
    //   return {
    //       ...state,
    //       wishList,
    //   };
    // }
    // case ADD_WISHLIST:{
    //   let { wishList } = state;
    //   let item = action.payload;

    //   wishList.push(item);
    //   console.log(wishList);
    //   localStorage.setItem("WishList", JSON.stringify(wishList));
    //   return {
    //       ...state,
    //       wishList
    //   }
    // }
    default:
      return state;
  }
}

