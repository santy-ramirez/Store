import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import UserService from "../services/test";
const initialState = { test: "hola desde el estado inicial" };

export const testfun = createAsyncThunk("test", async () => {
  try {
    const holis = await UserService.getHelloAdmin();
    return { test: holis.data };
  } catch (error) {
    console.log(error);
  }
});

const testSlice = createSlice({
  name: "test",
  initialState,
  extraReducers: {
    [testfun.fulfilled]: (state, action) => {
      state.test = action.payload.test;
    },
  },
});

const { reducer } = testSlice;
export default reducer;
