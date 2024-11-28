import { useEffect, useReducer } from "react";
import { useDispatch } from "react-redux";
import { COUNTER_ACTION } from "@redux/counterActionCreator";
import counterReducer from "@redux/counterReducer";

function Right3() {
  const dispatch = useDispatch();
  useEffect(() => {
    console.log("      # Right3 렌더링.");
  });
  const handleUp = () => {
    dispatch({ type: COUNTER_ACTION.UP, payload: { step: 1 } });
  };
  const handleDown = () => {
    dispatch({ type: COUNTER_ACTION.DOWN, payload: { step: 1 } });
  };
  const handleReset = () => {
    dispatch({ type: COUNTER_ACTION.RESET });
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
