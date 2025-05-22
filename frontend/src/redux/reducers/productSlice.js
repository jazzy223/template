import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import axios from "axios";

export const getProductThunk = createAsyncThunk("products/get", async () => {
    const res = await axios.get("http://localhost:6060/products")
    return res.data;
})

export const postProductThunk = createAsyncThunk("products/post", async (data) => {
    await axios.post("http://localhost:6060/products", data)
    const res = await axios.get("http://localhost:6060/products")
    return res.data;
})

export const deleteProductThunk = createAsyncThunk("products/delete", async (id) => {
    await axios.delete(`http://localhost:6060/products/${id}`)
    return id;
})

const productsSlice = createSlice({
    name: 'products',
    initialState: {
		products: []
	},
    reducers: {},
    extraReducers: (builder) => {
        builder

            .addCase(getProductThunk.fulfilled, (state, action) => {
                state.loading = false;
                state.products = action.payload;
            })

            .addCase(postProductThunk.fulfilled, (state, action) => {
                state.loading = false;
                state.products = action.payload;
            })

            .addCase(deleteProductThunk.fulfilled, (state, action) => {
                state.loading = false;
                state.products = state.products.filter(item => item._id !== action.payload);
            })
    }
})

export default productsSlice.reducer;
