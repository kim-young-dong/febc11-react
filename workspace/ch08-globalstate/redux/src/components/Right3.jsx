import { useEffect } from "react";
import { useDispatch } from "react-redux";
import counterActionCreator from "@redux/counterActionCreator";

function Right3() {
  const dispatch = useDispatch();
  useEffect(() => {
    console.log("      # Right3 렌더링.");
  });
  const handleUp = () => {
    dispatch(counterActionCreator.countUp(1));
  };
  const handleDown = () => {
    dispatch(counterActionCreator.countDown(1));
  };
  const handleReset = () => {
    dispatch(counterActionCreator.countReset());
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
