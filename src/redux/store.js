import { configureStore } from "@reduxjs/toolkit"
import productsSlice from "./productsSlice"

export const store = configureStore({
    reducer: {
        productsReducer: productsSlice
    }
})