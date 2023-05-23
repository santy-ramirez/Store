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
const productDeleted = {
  delete: "",
  product: product,
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
  async ({ sortDir, pageNo }) => {
    try {
      const response = await ProductService.getAllProducts(sortDir, pageNo);

      return response.data;
    } catch (error) {
      console.log(error);
    }
  }
);

export const deleteProduct = createAsyncThunk(
  "product/deleteProduct",
  async ({ id }) => {
    try {
      const response = await ProductService.deleteProduct(id);

      return response.data;
    } catch (error) {
      console.log(error);
    }
  }
);

const initialState = { product, products, productDeleted };

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
    [deleteProduct.fulfilled]: (state, action) => {
      state.productDeleted = action.payload;
    },
    [deleteProduct.rejected]: (state, action) => {
      state.productDeleted = action.error;
    },
  },
});

const { reducer } = productSlice;
export default reducer;
