import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart", 
  initialState : [], 
  reducers : {
        addItem(state, action){
        //    console.log(action.payload);
           state.push(action.payload)
        }, 
        removeItem(state,action){
           let itemId = action.payload
           let newProducts = state.filter(cartProduct => cartProduct.id !== action.payload) 

           return newProducts
        }
  }
})
export default cartSlice.reducer
export let {addItem, removeItem}  = cartSlice.actions