import { useState, createContext } from "react";
import proptype from "prop-types";

CounterProvider.propTypes = {
  children: proptype.node,
};

const CounterContext = createContext();

function CounterProvider({ children }) {
  const [count, setCount] = useState(0);

  const countUp = function (step = 1) {
    setCount(count + step);
  };
  const countDown = function (step = 1) {
    setCount(count - step);
  };
  const countReset = function (step = 0) {
    setCount(step);
  };

  const value = {
    state: { count },
    action: { countUp, countDown, countReset },
  };

  return (
    <CounterContext.Provider value={value}>{children}</CounterContext.Provider>
  );
}

export { CounterProvider, CounterContext };
