import { useState } from "react";

let count = 0;

export default function Message() {
  const [msg, setMsg] = useState("");

  const handleChange = (event) => {
    const inputMsg = event.target.value;
    setMsg(inputMsg);
    count++;
  };
  return (
    <div>
      <input type="text" name="" id="" onChange={handleChange} />
      <br />
      <span>input: {msg}</span>
      <br />
      <span>output: {count}</span>
    </div>
  );
}
