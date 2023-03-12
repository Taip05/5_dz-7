import {createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
    product: {},
    load: true
}

export const getProduct = createAsyncThunk('prod', async (id) => {
    const {data} = await axios.get(https://jsonplaceholder.typicode.com/photos/${id});
    return data
})

const productSlice = createSlice({
    name: 'aboutSlice',
    initialState,
    reducers: {},
    extraReducers(prod){
        prod
        .addCase(getProduct.pending, (state) => {
            state.load = true
        })
        .addCase(getProduct.fulfilled, (state, action) => {
            state.product = action.payload
            state.load = false
        })
    }
})

export default productSlice.reducer;
export const productSelect = state => state.productSlice;