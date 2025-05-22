import {configureStore} from "@reduxjs/toolkit";
import productsSlice from './reducers/productSlice.js'
import basketSlice from "./reducers/basketSlice.js";
import wishlistSlice from "./reducers/wishlistSlice.js";

export const store = configureStore({
    reducer: {
        products: productsSlice,
        basket: basketSlice,
        wishlist: wishlistSlice
    },
})