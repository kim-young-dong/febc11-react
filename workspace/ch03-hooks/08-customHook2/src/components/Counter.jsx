import { useRef } from "react";
import useCounter from "@hooks/useCounter";
import Button from "./Button";
import PropTypes from "prop-types";

Counter.propTypes = {
  children: PropTypes.string,
};

function Counter({ children = "0" }) {
  const initCount = Number(children);
  const step = useRef(1);
  const { count, up, down, reset } = useCounter(initCount, step.current);

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
        <Button id="decrement" color="danger" onClick={down}>
          -
        </Button>
        <Button id="reset" onClick={reset}>
          {children}
        </Button>
        <Button id="increment" color="primary" onClick={up}>
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

export default Counter;
