import { useEffect } from "react";
import { useSelector } from "react-redux";

function Left3() {
  const count = useSelector((state) => {
    return state.counter.value;
  });

  const time = useSelector((state) => {
    return state.time.value;
  });
  useEffect(() => {
    console.log("      # Left3 렌더링.");
  });

  return (
    <div>
      <h3>Left3</h3>
      <span>{time}</span>
      <span>{count}</span>
    </div>
  );
}

export default Left3;
