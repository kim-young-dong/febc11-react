import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "@redux/counterSlice";
import timeReducer from "@redux/timeSlice";

const store = configureStore({
  reducer: {
    counter: counterReducer,
    time: timeReducer,
  },
});

export default store;
