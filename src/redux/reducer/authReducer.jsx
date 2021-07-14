// import { ERROR, LOGIN, LOGOUT, UPDATE } from "../type";

import reduxToolkit from "../../core/reduxToolkit";
import Auth from "../../service/auth";
import userApi from "../../service/userApi";

let user = JSON.parse(localStorage.getItem("login"));

let initState = {
  login: !!user,
  loginError: "",
  user: user,
  error: null,
};

// export default function authReducer(state = initState, action) {
//   switch (action.type) {
// case LOGIN:
//   localStorage.setItem("login", JSON.stringify(action.payload));
//   return {
//     ...state,
//     login: action.payload,
//   };
// case LOGOUT:
//   localStorage.setItem("login", false);
//   return {
//     ...state,
//     login: false,
//   };
// case ERROR:
//   return {
//     ...state,
//     loginError: action.payload,
//   };
// case UPDATE:
//   localStorage.setItem("login", JSON.stringify(action.payload));
//   return {
//     ...state,
//     login: action.payload,
//   };
//     default:
//       return state;
//   }
// }

export function loginAction(data) {
  // return async (dispatch, state) => {
  //   let res = await Auth.login(data);
  //   if (res.data) {
  //     localStorage.setItem("token", JSON.stringify(res.data.token));
  //     dispatch({
  //       type: AUTH_TYPE.login,
  //       payload: res.data,
  //     });
  //   } else if (res.error) {
  //     dispatch({
  //       type: AUTH_TYPE.error,
  //       payload: res.error,
  //     });
  //   }
  // };
  return (dispatch, state) => {
    userApi.login(data).then((res) => {
      if (res.error) {
        dispatch(action.error({ loginError: res.error }));
      } else {
        dispatch(action.login(res.data));
      }
    });
  };
}
export function updateAction(data) {
  return async (dispatch) => {
    let res = await Auth.update(data);
    if (res?.data) {
      dispatch({
        type: AUTH_TYPE.update,
        payload: res.data,
      });
    } else if (res.error) {
      dispatch({
        type: AUTH_TYPE.error,
        payload: res.error,
      });
    }
  };
}
let { action, reducer, TYPE } = reduxToolkit({
  initialState: initState,
  name: "auth",
  reducers: {
    login: (state, action) => {
      localStorage.setItem("login", JSON.stringify(action.payload));
      return {
        ...state,
        login: action.payload,
      };
    },
    logout: (state, action) => {
      localStorage.setItem("login", false);
      localStorage.setItem("token", false);
      return {
        ...state,
        login: false,
      };
    },
    error: (state, action) => {
      return {
        ...state,
        loginError: action.payload,
      };
    },
    update: (state, action) => {
      localStorage.setItem("login", JSON.stringify(action.payload));
      return {
        ...state,
        login: action.payload,
      };
    },
  },
});

export default reducer;

export const { error, update, logout, login } = action; //export error tu action
export const AUTH_TYPE = TYPE;