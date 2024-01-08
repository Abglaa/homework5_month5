import { createSlice, createAsyncThunk } from "@reduxjs/toolkit"

export const fetchProducts = createAsyncThunk("fetchProducts", async (info, {dispatch}) => {
    try {
        const response = await fetch("https://dummyjson.com/products?limit=20")
        const data = await response.json()
        dispatch(getProducts(data))
    } catch (e) {
        console.log(e);
        
    }
    }
)

const productsSlice = createSlice({
    name: "productsSlice",
    initialState: {
        products: [],
        amountOfProductsToBuy: 0
    },
    reducers: {
        getProducts: (state, action) => {
            state.products = action.payload
 }    ,
        addProduct: (state) => {
            state.amountOfProductsToBuy = state.amountOfProductsToBuy + 1
        }
}
})

export const {getProducts, addProduct} = productsSlice.actions
export default productsSlice.reducer