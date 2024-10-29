import { createSlice } from "@reduxjs/toolkit";
import img1 from "../../assets/boy-tshirt.png";

const initialState = {
  products: {},
};

const cartProductSlice = createSlice({
  name: " Cart Product Slice",
  initialState,
  reducers: {
    productList: (state, action) => {},
  },
});

export default cartProductSlice.reducer;
