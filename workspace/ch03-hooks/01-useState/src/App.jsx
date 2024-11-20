import { useState } from "react";

function App() {
  const [message, setMessage] = useState("");

  return (
    <>
      <h1>01 useState</h1>
      <div>
        <input
          type="text"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
        />
        <p>입력 메시지: {message}</p>
      </div>
    </>
  );
}

export default App;
