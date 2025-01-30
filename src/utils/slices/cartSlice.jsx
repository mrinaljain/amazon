import { createSlice } from "@reduxjs/toolkit";


const cartSlice = createSlice({
   name: "cart",
   initialState: [],
   reducers: {
      addItem(state) {
         state.value
      },
      removeItem() {
         { }
      },
      increaseAmount(state, action) {
         return
      }
   }
})