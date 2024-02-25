import { configureStore } from "@reduxjs/toolkit";
import cartSlice from "./Slices/cartSlice";
import restaurantSlice from "./Slices/restaurantSlice";
export const store = configureStore({
  reducer: {
    cart: cartSlice,
    restaurant: restaurantSlice,
  },
});
