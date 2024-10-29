import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  productData: [],
};

const productListSlice = createSlice({
  name: " Product Data",
  initialState,
  reducers: {
    displayData: (state, actions) => {},
  },
});
