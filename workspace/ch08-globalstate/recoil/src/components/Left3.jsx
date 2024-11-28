import { counterState } from "@recoil/atoms";
import { counterToKorean } from "@recoil/selectors";
import { useEffect } from "react";
import { useRecoilValue } from "recoil";

function Left3() {
  useEffect(() => {
    console.log("      # Left3 렌더링.");
  });

  const count = useRecoilValue(counterToKorean); // atom에서 읽기
  console.log("count: ", count);

  return (
    <div>
      <h3>Left3</h3>
      <span>{count}</span>
    </div>
  );
}

export default Left3;
