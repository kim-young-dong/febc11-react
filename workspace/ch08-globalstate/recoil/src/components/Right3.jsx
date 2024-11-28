import { useEffect } from "react";
import { useRecoilState } from "recoil";
import { counterState } from "@recoil/atoms";

function Right3() {
  const [count, setCount] = useRecoilState(counterState);
  useEffect(() => {
    console.log("      # Right3 렌더링.");
  });
  return (
    <div>
      <h3>Right3</h3>
      <button
        onClick={() => {
          setCount(count + 1);
        }}
      >
        +1
      </button>
    </div>
  );
}

export default Right3;
