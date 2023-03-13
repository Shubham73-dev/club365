import { configureStore  } from "@reduxjs/toolkit";
import cartReducer from "../modules/cart/redux/cart-slice.js";
import productReducer from "../modules/products/redux/product-slice.js";
export default configureStore({
    reducer:{
        cartItems:cartReducer,
        products: productReducer
    }
},window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())