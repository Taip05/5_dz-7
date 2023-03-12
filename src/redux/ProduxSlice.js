import {createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
    products: [],
    load: true
}

export const getProducts = createAsyncThunk('products', async () => {
    const {data} = await axios.get('https://jsonplaceholder.typicode.com/photos')
    console.log(data);
    return data
})

const productsSlice = createSlice({
    name: 'productsSlice',
    initialState,
    reducers: {},
    extraReducers(prod){
        prod
        .addCase(getProducts.pending, (state) => {
            state.load = true
        })
        .addCase(getProducts.fulfilled, (state, action) => {
            state.products = action.payload
            state.load = false
        })
    }
})

export default productsSlice.reducer;
export const productsSelect = state => state.productsSlice;