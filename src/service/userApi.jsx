import Api from "../core/Api";

export default {
  login: (data) => {
    return Api.post("login", data);
  },
  register: (data) => {
    return Api.post("register", data);
  },
  update: (data) => {
    return Api.token().post("update-profile", data);
  },
};
