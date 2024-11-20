import { useState } from "react";
import PropsType from "prop-types";

FunctionBase.propTypes = {
  level: PropsType.number,
};

function FunctionBase({ level = 1 }) {
  const [count, setCount] = useState(level || 1);

  return (
    <div>
      Count: {count * level}
      <button
        onClick={() => {
          setCount(count + 1);
        }}
      >
        Click Me
      </button>
    </div>
  );
}

function Parent() {
  return (
    <div>
      <h1>Parent</h1>
      <FunctionBase level={1} />
      <FunctionBase level={2} />
      <FunctionBase level={3} />
      <FunctionBase level={4} />
      <FunctionBase level={5} />
    </div>
  );
}

export default Parent;
