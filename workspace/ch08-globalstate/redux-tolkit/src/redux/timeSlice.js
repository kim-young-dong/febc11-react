import { createSlice } from "@reduxjs/toolkit";

// 초기 상태
const initialState = { date: new Date().toLocaleDateString() };

function parseLocaleDateString(dateString) {
  const [year, month, day] = dateString.split(".").map(Number);
  return new Date(year, month - 1, day);
}

function formatDateToYYYYMMDD(date) {
  const dateString = date.toLocaleDateString();
  const [year, month, day] = dateString.split(".").map(Number);

  // 연도는 그대로 사용
  // 월과 일은 두 자리 숫자로 패딩
  const paddedMonth = String(month - 1).padStart(2, "0");
  const paddedDay = String(day).padStart(2, "0");

  return `${year}.${paddedMonth}.${paddedDay}`;
}

export const dateSlice = createSlice({
  name: "date",
  initialState,
  reducers: {
    getNow: (state) => {
      state.date = new Date().toLocaleDateString();
    },
    addDate: (state, action) => {
      const newDate = parseLocaleDateString(state.date);
      console.log(parseLocaleDateString(state.date));

      console.log("newDate: ", newDate);

      newDate.setDate(newDate.getDate() + action.payload.date);
      console.log("newDate: ", newDate);

      state.date = newDate.toLocaleDateString();
    },
    minusDate: (state, action) => {
      const newDate = parseLocaleDateString(state.date);
      newDate.setDate(newDate.getDate() - action.payload.date);
      state.date = newDate.toLocaleDateString();
    },
  },
});

export const { getNow, addDate, minusDate } = dateSlice.actions;

export default dateSlice.reducer;
