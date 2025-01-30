import { configureStore, createSlice } from "@reduxjs/toolkit";
import cartSliceReducer from "../slices/cartSlice.js";
import { productsApi } from "../../services/productsApi.js";
import { setupListeners } from "@reduxjs/toolkit/query";

export const appStore = configureStore({
  reducer: {
    cart: cartSliceReducer,
    [productsApi.reducerPath]: productsApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(productsApi.middleware),
});

setupListeners(appStore.dispatch);
