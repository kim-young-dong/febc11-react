import { createSlice } from "@reduxjs/toolkit";

// 초기 상태
const initialState = { value: 5 };

export const counterSlice = createSlice({
  name: "counter",
  initialState: {
    value: initialState.value,
  },
  reducers: {
    increment: (state) => {
      state.value += 1;
    },
    decrement: (state) => {
      state.value -= 1;
    },
    incrementByAmount: (state) => {
      state.value = initialState.value;
    },
  },
});

export const { increment, decrement, incrementByAmount } = counterSlice.actions;

export default counterSlice.reducer;
