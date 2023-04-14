import { configureStore } from "@reduxjs/toolkit";
import authReducer from "./slices/auth";
import testReducer from "./slices/test";

const reducer = {
  auth: authReducer,
  test: testReducer,
};

const store = configureStore({
  reducer: reducer,
  devTools: true,
});

export default store;
