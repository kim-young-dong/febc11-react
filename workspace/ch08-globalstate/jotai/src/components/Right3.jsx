import { useEffect } from "react";
import { useSetAtom } from "jotai";
import { counterAtom, dateAtom } from "../jotai/atoms";
import { parseLocaleDateString } from "../jotai/selectors";

function Right3() {
  const setCount = useSetAtom(counterAtom);
  const setDate = useSetAtom(dateAtom);

  useEffect(() => {
    console.log("      # Right3 렌더링.");
  });

  const handleUp = () => {
    setCount((prev) => prev + 2);
    setDate((prev) => {
      const newDate = parseLocaleDateString(prev);
      return new Date(
        newDate.setDate(newDate.getDate() + 2)
      ).toLocaleDateString();
    });
  };

  const handleDown = () => {
    setCount((prev) => prev - 3);
    setDate((prev) => {
      const newDate = parseLocaleDateString(prev);
      return new Date(
        newDate.setDate(newDate.getDate() - 3)
      ).toLocaleDateString();
    });
  };

  const handleReset = () => {
    setCount(0);
    setDate(new Date().toLocaleDateString());
  };

  return (
    <div>
      <h3>Right3</h3>
      <button onClick={handleDown}>-3</button>
      <button onClick={handleReset}>0</button>
      <button onClick={handleUp}>+2</button>
    </div>
  );
}

export default Right3;
