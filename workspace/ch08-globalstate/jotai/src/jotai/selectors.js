import { selectAtom } from "jotai/utils";
import { dateAtom } from "./atoms";

export function parseLocaleDateString(dateString) {
  const [year, month, day] = dateString.split(".").map(Number);

  return new Date(year, month - 1, day);
}

export function formatDateToYYYYMMDD(dateString) {
  const [year, month, day] = dateString.split(".").map(Number);

  // 연도는 그대로 사용
  // 월과 일은 두 자리 숫자로 패딩
  const paddedMonth = String(month).padStart(2, "0");
  const paddedDay = String(day).padStart(2, "0");

  return `${year}.${paddedMonth}.${paddedDay}`;
}

export const localDateStringAtom = selectAtom(dateAtom, (date) => {
  return formatDateToYYYYMMDD(date);
});
