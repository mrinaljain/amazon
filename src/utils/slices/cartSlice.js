import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: [],
  reducers: {
    addItem: (state, action) => {
      console.log("Reducer ", action.payload);

      state.push(action.payload);
    },
    removeItem: (state, action) => {},
    increaseAmount: (state, action) => {
      return [];
    },
    claerCart: (state, action) => {},
  },
});

export default cartSlice.reducer;

export const { addItem, removeItem, increaseAmount, claerCart } =
  cartSlice.actions;
