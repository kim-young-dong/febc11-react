import { useState } from "react";

function useCounter(initCount = 0, step = 1) {
  const [count, setCount] = useState(initCount);

  const handleDown = () => {
    setCount(count - step);
  };
  const handleUp = () => {
    setCount(count + step);
  };
  const handleReset = () => {
    setCount(initCount);
  };

  return { count, down: handleDown, up: handleUp, reset: handleReset };
}

export default useCounter;
