import { createSlice } from "@reduxjs/toolkit";

export const counterSlice = createSlice({
  name: "counter",
  initialState: { count: 0 },
  reducers: {
    increment: (state) => {
      state.count += 1;
    },
    decrement: (state) => {
      state.count -= 1;
    },
    reset: (state) => {
      state.count = 0;
    },
    addAmount: (state, action) => {
      state.count += action.payload;
    },
  },
});

console.log(counterSlice.actions);

export default counterSlice;
export const { increment, decrement, reset, addAmount } = counterSlice.actions;
export const counterReducer = counterSlice.reducer;
