import { createSlice } from "@reduxjs/toolkit";

// 초기 상태
const initialState = { value: new Date().toLocaleTimeString() };

export const timeSlice = createSlice({
  name: "counter",
  initialState: {
    value: initialState.value,
  },
  reducers: {
    getNow: (state) => {
      state.value = new Date().toLocaleTimeString();
    },
  },
});

export const { getNow } = timeSlice.actions;

export default timeSlice.reducer;
