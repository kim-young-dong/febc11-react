import { useEffect, useContext } from "react";
import { CounterContext } from "@context/CounterContext";

function Left3() {
  const {
    state: { count },
  } = useContext(CounterContext);
  useEffect(() => {
    console.log("      # Left3 렌더링.");
  });
  return (
    <div>
      <h3>Left3</h3>
      <span>{count}</span>
    </div>
  );
}

export default Left3;
