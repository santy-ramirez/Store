const API_URL = "http://localhost:8080/products";
import axios from "axios";
import authHeader from "./auth-header";
const saveProduct = (name, category, image, price, description) => {
  return axios.post(
    API_URL,
    {
      name,
      category,
      image,
      price,
      description,
    },
    {
      headers: authHeader(),
    }
  );
};

const getAllProducts = () => {
  return axios.get(API_URL);
};

const productService = {
  saveProduct,
  getAllProducts,
};
export default productService;
