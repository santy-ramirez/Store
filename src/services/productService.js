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

const getAllProducts = (sortDir, page) => {
  return axios.get(API_URL + `?sortDir=${sortDir}` + `&pageNo=${page}`);
};

const deleteProduct = (id) => {
  console.log(id);
  console.log(API_URL);
  return axios.delete(API_URL + "/" + id, {
    headers: authHeader(),
  });
};

const productService = {
  saveProduct,
  getAllProducts,
  deleteProduct,
};
export default productService;
