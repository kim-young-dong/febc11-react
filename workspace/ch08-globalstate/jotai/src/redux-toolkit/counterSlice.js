import { createSlice } from "@reduxjs/toolkit";

export const counterSlice = createSlice({
  name: "counter",
  initialState: {
    count: 10,
    date: new Date().toLocaleDateString(),
  },
  reducers: {
    increment: (state, action) => {
      state.count += action.payload.step;
    },
    decrement: (state, action) => {
      state.count -= action.payload.step;
    },
    reset: (state) => {
      state.count = 10;
      state.date = new Date().toLocaleDateString();
    },
  },
});

export const { increment, decrement, reset } = counterSlice.actions;

export default counterSlice.reducer;
