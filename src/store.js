import { configureStore } from "@reduxjs/toolkit";
import authReducer from "./slices/auth";
import testReducer from "./slices/test";
import productReduce from "./slices/product";

const reducer = {
  auth: authReducer,
  test: testReducer,
  product: productReduce,
};

const store = configureStore({
  reducer: reducer,
  devTools: true,
});

export default store;
