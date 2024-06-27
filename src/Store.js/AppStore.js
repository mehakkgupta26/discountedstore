import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./cartSlice";
import authReducer from "./AuthSlice";
import productSlice from "./ProductSlice";

const Appstore = configureStore({
  reducer: {
    cart : cartReducer, 
    auth : authReducer,
    products: productSlice
  }
});

export default Appstore;
