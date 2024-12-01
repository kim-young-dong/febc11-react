import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "@redux-toolkit/counterSlice";
import dateReducer from "@redux-toolkit/dateSlice";

const store = configureStore({
  reducer: {
    counter: counterReducer,
    date: dateReducer,
  },
});

export default store;
