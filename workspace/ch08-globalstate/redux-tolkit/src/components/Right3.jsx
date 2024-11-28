import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { increment, decrement, reset } from "@redux/myCounterSlice";
// import { increment, decrement, reset } from "@redux/counterSlice";
import { getNow } from "@redux/timeSlice";

function Right3() {
  const dispatch = useDispatch();
  useEffect(() => {
    console.log("      # Right3 렌더링.");
  });
  const handleUp = () => {
    dispatch(
      increment({
        step: 1,
      })
    );
  };
  const handleDown = () => {
    dispatch(
      decrement({
        step: 1,
      })
    );
  };
  const handleReset = () => {
    dispatch(reset());
    // dispatch(getNow());
  };

  return (
    <div>
      <h3>Right3</h3>
      <button onClick={handleDown}>-1</button>
      <button onClick={handleReset}>0</button>
      <button onClick={handleUp}>+1</button>
    </div>
  );
}

export default Right3;
