import { configureStore } from "@reduxjs/toolkit";
import productsSlice from "./productsSlice";
import productSelect  from "./aboutSlice";

export const store = configureStore({
    reducer: {
        productsSlice,
        productSelect
    }
})