import { useEffect, useContext } from "react";
import { CounterContext } from "@context/CounterContext";

function Right3() {
  const {
    action: { countUp, countDown, countReset },
  } = useContext(CounterContext);

  useEffect(() => {
    console.log("      # Right3 렌더링.");
  });
  return (
    <div>
      <h3>Right3</h3>

      <button
        onClick={() => {
          countDown(1);
        }}
      >
        -1
      </button>
      <button
        onClick={() => {
          countReset(0);
        }}
      >
        0
      </button>
      <button
        onClick={() => {
          countUp(1);
        }}
      >
        +1
      </button>
    </div>
  );
}

export default Right3;
