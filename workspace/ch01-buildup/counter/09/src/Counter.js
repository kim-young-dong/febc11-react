import Renos from "../Renos.js";

function Counter() {
  // 상태 관리
  const [count, setCount] = Renos.useState(0);

  const handleDown = () => {
    setCount(count - 1);
  };
  const handleUp = () => {
    setCount(count + 1);
  };
  const handleReset = (event) => {
    setCount(0);
  };

  return Renos.createElement(
    "div",
    { id: "counter" },
    Renos.createElement("button", { type: "button", onclick: handleDown }, "-"),
    Renos.createElement(
      "button",
      { type: "button", onclick: (event) => handleReset(event) },
      "0"
    ),
    Renos.createElement("button", { type: "button", onclick: handleUp }, "+"),
    Renos.createElement("span", null, count)
  );
}

export default Counter;
