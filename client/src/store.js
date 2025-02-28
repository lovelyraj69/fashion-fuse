import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./redux/cartSlice"; // Import the cart slice

export const store = configureStore({
  reducer: {
    cart: cartReducer
  }
});
