import { useState } from "react";
import Button from "./Button";

function Counter() {
  const [count, setCount] = useState(0);

  const handleDown = () => {
    setCount(count - 1);
  };
  const handleUp = () => {
    setCount(count + 1);
  };
  const handleReset = () => {
    setCount(0);
  };

  return (
    <div id="counter">
      <div>
        <Button color="secondary" onClick={handleDown}>
          -
        </Button>
        <Button onClick={handleReset}>0</Button>
        <Button color="primary" onClick={handleUp}>
          +
        </Button>
      </div>
      <span>{count}</span>
    </div>
  );
}

export default Counter;
