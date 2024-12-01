import { useEffect } from "react";
import useCounterState from "@zustand/counter";
function Right3() {
  const countUp = useCounterState((state) => state.countUp);
  useEffect(() => {
    console.log("      # Right3 렌더링.");
  });
  return (
    <div>
      <h3>Right3</h3>
      <button
        onClick={() => {
          countUp(4);
        }}
      >
        +4
      </button>
    </div>
  );
}

export default Right3;
