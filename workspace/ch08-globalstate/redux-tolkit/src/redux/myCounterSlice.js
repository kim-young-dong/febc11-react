import { createSlice } from "@reduxjs/toolkit";

// 초기 상태
const initialState = { count: 5, date: new Date().toLocaleTimeString() };

export const counterSlice = createSlice({
  name: "myCounter",
  initialState: {
    ...initialState,
  },
  reducers: {
    increment: (state, action) => {
      state.count += action.payload.step;
    },
    decrement: (state, action) => {
      state.count -= action.payload.step;
    },
    reset: (state) => {
      state.count = initialState.count;
      state.date = initialState.date;
    },
  },
});

export const { increment, decrement, reset } = counterSlice.actions;

export default counterSlice.reducer;
