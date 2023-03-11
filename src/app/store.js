import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "../modules/cart/redux/cart-slice.js";
export default configureStore({
    reducer:{
        cartItems:cartReducer,
    }
})