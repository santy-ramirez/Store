import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import ProductService from "../services/productService";
const product = {
  name: "",
  category: "",
  image: "",
  price: "",
  description: "",
};
const products = {
  totalPages: 0,
  totalElements: 0,
  totalThePages: 0,
  pageSize: 0,
  pageNo: 0,
  last: false,
  content: [product],
};
export const addProduct = createAsyncThunk(
  "product/addProduct",
  async ({ name, category, image, price, description }, thunkAPI) => {
    try {
      const response = await ProductService.saveProduct(
        name,
        category,
        image,
        price,
        description
      );
      console.log("-----desde redux---");
      console.log(response);
      //thunkAPI.dispatch(setMessage(response.data.message));
      return response.data;
    } catch (error) {
      const message =
        (error.response &&
          error.response.data &&
          error.response.data.message) ||
        error.message ||
        error.toString();
      console.log(message);
      // thunkAPI.dispatch(setMessage(message));
      return thunkAPI.rejectWithValue();
    }
  }
);

export const getAllProducts = createAsyncThunk(
  "product/getAllProducts",
  async () => {
    try {
      const response = await ProductService.getAllProducts();

      return response.data;
    } catch (error) {
      console.log(error);
    }
  }
);

const initialState = { product, products };

const productSlice = createSlice({
  name: "product",
  initialState,
  extraReducers: {
    [addProduct.fulfilled]: (state, action) => {
      state.product = action.payload;
    },
    [addProduct.rejected]: (state, action) => {
      state.product = action.error;
    },
    [getAllProducts.fulfilled]: (state, action) => {
      state.products = action.payload;
    },
    [getAllProducts.rejected]: (state, action) => {
      state.products = action.error;
    },
  },
});

const { reducer } = productSlice;
export default reducer;
