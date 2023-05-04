import { configureStore  } from "@reduxjs/toolkit";
import cartReducer from "../modules/cart/redux/cart-slice.js";
import productReducer from "../modules/products/redux/product-slice.js";
import cardButtonsReducer from "../modules/card/redux/card-button-slice.js";
export default configureStore({
    reducer:{
        cartItems:cartReducer,
        products: productReducer,
        cardButtons:cardButtonsReducer 
    }
},window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())