import { useState, useMemo } from "react";

import Header from "@components/Header";

function App() {
  const [name, setName] = useState("");
  const [age, setAge] = useState(0);

  // useMemo를 사용하여 소수 판별 함수를 최적화
  const isPrime = useMemo(() => {
    if (age < 2) return false;
    for (let i = 2; i <= Math.sqrt(age); i++) {
      if (age % i === 0) return false;
    }

    return true;
  }, [age]);

  return (
    <>
      <Header title="02 useEffect" />
      <div>
        name:{" "}
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        age:{" "}
        <input
          type="number"
          value={age}
          onChange={(e) => setAge(e.target.value)}
        />
        <p>{isPrime ? "isPrime" : "notPrime"}</p>
      </div>
    </>
  );
}

export default App;
