import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "@redux/counterSlice";
import myCounterReducer from "@redux/myCounterSlice";
import timeReducer from "@redux/timeSlice";

const store = configureStore({
  reducer: {
    counter: counterReducer,
    myCounter: myCounterReducer,
    time: timeReducer,
  },
});

export default store;
