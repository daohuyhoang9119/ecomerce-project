import { domain } from "./config";

const Auth = {

  async refreshToken() {
    let {refreshToken} = JSON.parse(localStorage.getItem("token"));
    console.log(refreshToken);
    let res = await fetch(`http://cfd-reactjs.herokuapp.com/elearning/v4/refresh-token`, {
      method: "POST",
      body: JSON.stringify({
        refreshToken: refreshToken,
      }),
      headers: {
        "Content-Type": "application/json",
      },
    }).then((res) => res.json());

    if (res?.data?.accessToken) {
      localStorage.setItem("token", JSON.stringify(res.data));
    }
    return true;
  },
  //------LOGIN-----------
  login(data) {

    //${domain}/elearning/v4/login
    return fetch(`${domain}/login`, {
      method: "POST",
      body: JSON.stringify(data),
      headers: {
        "Content-Type": "application/json",
      },
    }).then((res) => res.json());
    // return api.post(`/elearning/v4/login`, data);
  },
  //-------REGISTER---------------
  register(form) {
    return fetch(`${domain}/register`,{
      method: 'POST',
      body: JSON.stringify(form),
      headers: {
        "Content-Type" : "application/json"
      },
    }).then((res) => res.json);
  },

  async update(data) {
    console.log(data);
    // let token = JSON.parse(localStorage.getItem("login")?.token?.accessToken);
    let token = JSON.parse(localStorage.getItem("token"))?.accessToken;

    let res =  await fetch(`http://cfd-reactjs.herokuapp.com/update-profile`, {
      method: "POST",
      body: JSON.stringify(data),
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    });

    console.log(res.status);

    if(res.status === 200){
      return res.json();
    }
    if(res.status === 403){
      console.log('run');
      await Auth.refreshToken();
      let token = JSON.parse(localStorage.getItem("token"))?.accessToken;
      console.log(token);
      return await fetch(`http://cfd-reactjs.herokuapp.com/update-profile`, {
        method: "POST",
        body: JSON.stringify(data),
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
      }).then((res) => res.json());
    }

    // .then((res) =>
    //   tokenHandle(res, () => {
    //     let token = JSON.parse(localStorage.getItem("token"))?.accessToken;
    //     return fetch(`${domain}/elearning/v4/profile/update`, {
    //       method: "POST",
    //       body: JSON.stringify(data),
    //       headers: {
    //         "Content-Type": "application/json",
    //         Authorization: `Bearer ${token}`,
    //       },
    //     }).then((res) => res.json());
    //   })
    // );
  },
};

// export async function tokenHandle(res, callBack) {
//   if (res.status === 200) {
//     return res.json();
//   }

//   if (res.status === 403) {
//     await Auth.refreshToken();
//     // let token = JSON.parse(localStorage.getItem("token"))?.accessToken;
//     callBack();
//   }
// }

export default Auth;
