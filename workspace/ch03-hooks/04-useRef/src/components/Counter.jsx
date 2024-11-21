import { useReducer, useRef } from "react";
import Button from "./Button";
import PropTypes from "prop-types";

Counter.propTypes = {
  children: PropTypes.string,
};

function Counter({ children = "0" }) {
  const initCount = Number(children);
  const [count, dispatch] = useReducer(CounterReducer, initCount);
  const step = useRef(1);

  const handleDown = () => {
    dispatch({ type: "DECREMENT", value: step.current });
  };
  const handleUp = () => {
    dispatch({ type: "INCREMENT", value: step.current });
  };
  const handleReset = () => {
    dispatch({ type: "RESET", value: initCount });
  };

  return (
    <div id="counter">
      <label htmlFor="step">증감치</label>
      <input
        id="step"
        type="number"
        style={{ width: "50px" }}
        defaultValue={step.current}
        onChange={(e) => (step.current = Number(e.target.value))}
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
        {count} 에서 {step.current}만큼{" "}
        {count + step.current >= 0 ? "증가" : "감소"}
      </p>
    </div>
  );
}

function CounterReducer(state, { type, value }) {
  let newState;

  switch (type) {
    case "INCREMENT":
      newState = state + value;
      break;
    case "DECREMENT":
      newState = state - value;
      break;
    default:
      newState = value;
      break;
  }

  return newState;
}

export default Counter;
