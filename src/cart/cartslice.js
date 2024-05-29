import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  cart:[]
}


export const cartslice = createSlice({
  name: 'counter',
  initialState,
  reducers: {
    addproduct:(state,action)=>{
        // state.cart=action.payload;  
        state.cart.push(action.payload)
    }
  },
})

// Action creators are generated for each case reducer function
export const { addproduct } = cartslice.actions

export default cartslice.reducer