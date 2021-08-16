import Auth from "../../service/auth";
import { LOGIN,LOGOUT,ERROR,REGISTER,REGISTER_ERROR,UPDATE } from "../type";

export function loginAction(data) {
    return async (dispatch) => {
        let res = await Auth.login(data);
        if (res?.data) {
            localStorage.setItem("token", JSON.stringify(res.data.token));
            dispatch({
                type: LOGIN,
                payload: res.data,
            });
        } else if (res.error) {
            dispatch({
                type: ERROR,
                payload: res.error,
            });
        }
    };

}
export function logoutAction(data){
    return {    
        type:LOGOUT
    }
}

export function registerAction(data){
    return async (dispatch) =>{
        let res = await Auth.register(data);
        if(res?.data){
            return({
                type:REGISTER,
                payload: res.data,
            })
        }else if(res.error){
            return({
                type: REGISTER_ERROR,
                payload: res.error,
            });
        }
    };
}
export function updateAction(data){
    return async (dispatch) => {
        let res = await Auth.update(data)
        if (res?.data) {
            dispatch({
                type: UPDATE,
                payload: res.data
            })
        } else if (res.error) {
            dispatch({
                type: ERROR,
                payload: res.error,
            });
        }
    }
}



//   return (dispatch, state) => {
//     userApi.login(data).then((res) => {
//       if (res.error) {
//         dispatch(action.error({ loginError: res.error }));
//       } else {
//         dispatch(action.login(res.data));
//       }
//     });
//   };
