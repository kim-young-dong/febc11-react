import { useState, useEffect } from "react";
import Button from "./Button";
import PropTypes from "prop-types";

Counter.propTypes = {
  children: PropTypes.string,
};

function Counter({ children = "0" }) {
  const initCount = Number(children);
  const [count, setCount] = useState(initCount);
  const [step, setStep] = useState(1);

  // useEffect(() => {
  //   console.log("useEffect");
  //   console.log(`count: ${count}`);

  //   return () => {
  //     console.log("useEffect cleanup");
  //   };
  // }, [count]);

  const handleDown = () => {
    setCount(count - step);
  };
  const handleUp = () => {
    setCount(count + step);
  };
  const handleReset = () => {
    setCount(initCount);
  };

  return (
    <div id="counter">
      <label htmlFor="step">증감치</label>
      <input
        id="step"
        type="number"
        style={{ width: "50px" }}
        value={step}
        onChange={(e) => setStep(Number(e.target.value))}
      />
      <div>
        <Button id="decrement" color="danger" onClick={handleDown}>
          -
        </Button>
        <Button id="reset" onClick={handleReset}>
          {children}
        </Button>
        <Button id="increment" color="primary" onClick={handleUp}>
          +
        </Button>
      </div>
      <p>
        {count} 에서 {step}만큼 {count + step >= 0 ? "증가" : "감소"}
      </p>
    </div>
  );
}

export default Counter;
