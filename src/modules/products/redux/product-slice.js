import { createAsyncThunk,createSlice } from "@reduxjs/toolkit";
import apiClient from '../../../shared/services/api-client'
import CONFIG from '../../../settings/config'

export const getAllProducts = createAsyncThunk("/get-products",async()=>{
    const URL = CONFIG.Product_API_URL;
    const products = await apiClient.get(URL);
    console.log('thunk called $$$$$',products);
    return products;

});
const productSlice = createSlice({
    name: 'products',
    initialState:{'products':[],isLoading:true,'allProducts':[],isDataLoaded: false},
    reducers:{
        add(state,action){
            state.products.push(action.payload);
            // console.log('data from product-slice***',state,action);
        }
    },
    extraReducers:{
        [getAllProducts.pending]:(state,action)=> {
            state.isLoading = true
        },
        [getAllProducts.fulfilled]:(state,action)=> {
            state.isLoading = false;
            state.products = action.payload;
            state.isDataLoaded = true;
            state.allProducts = action.payload
            // console.log(state);
            // console.log('data is fulfilled sucessfully ****',state.products);
        },
        [getAllProducts.rejected]:(state,action)=> {
            state.isLoading = false;
            state.error = action.payload;
        }
    }
})

export const {add} = productSlice.actions;
export default productSlice.reducer;