import axios from "axios";

const API_URL = "http://localhost:8080/auth/";

const register = (username, password, email, authoritie) => {
  return axios.post(API_URL + "register", {
    username,
    password,
    email,
    authoritie,
  });
};

const login = (username, password) => {
  return axios
    .post(API_URL + "login", {
      username,
      password,
    })
    .then((response) => {
      if (response.data.jwt) {
        localStorage.setItem("user", JSON.stringify(response.data));
      }

      return response.data;
    });
};

const logout = () => {
  localStorage.removeItem("user");
};

const authService = {
  register,
  login,
  logout,
};

export default authService;
