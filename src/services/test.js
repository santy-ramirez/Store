import axios from "axios";
import authHeader from "./auth-header";

const API_URL = "http://localhost:8080/";

const getHelloAdmin = () => {
  return axios.get(API_URL + "hello", { headers: authHeader() });
};

const getHelloUser = () => {
  return axios.get(API_URL + "user", { headers: authHeader() });
};

const userService = {
  getHelloAdmin,
  getHelloUser,
};

export default userService;
