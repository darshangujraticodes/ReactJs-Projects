import { configureStore } from "@reduxjs/toolkit";
import reducer from "../features/cartSlice/cartProductSlice";

const store = configureStore({ reducer: reducer });

export default store;
