import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
    name:'cartItems',
    initialState :{'cartItems':[],isLoading:true, 'allCartItems':[]},
    reducers:{
            // CRUD Sync Operations
            // action contains data from UI inside the key called payload
            add(state, action){
                // console.log('total cart items are ****',action);
                state.cartItems.push(action.payload)
                // console.log('After Add in State ', state);
            },
            remove(state, action){
                console.log(action);
                state.cartItems.pop(action.payload)
                // console.log('After Add in State ', state);
            }
    }
})

export  const {add,remove} = cartSlice.actions;
export default cartSlice.reducer;