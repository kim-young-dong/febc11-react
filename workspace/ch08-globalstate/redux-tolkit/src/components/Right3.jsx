import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { increment, decrement, reset } from "@redux/myCounterSlice";
// import { increment, decrement, reset } from "@redux/counterSlice";
import { getNow, addDate, minusDate } from "@redux/timeSlice";

function Right3() {
  const dispatch = useDispatch();

  useEffect(() => {
    console.log("      # Right3 렌더링.");
  });

  const handleUp = () => {
    dispatch(
      increment({
        step: 2,
      })
    );
    dispatch(addDate({ date: 2 }));
  };

  const handleDown = () => {
    dispatch(
      decrement({
        step: 3,
      })
    );
    dispatch(minusDate({ date: 3 }));
  };

  const handleReset = () => {
    dispatch(reset());
    dispatch(getNow());
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
