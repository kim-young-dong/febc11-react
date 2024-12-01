import { useEffect } from "react";
import { useAtomValue } from "jotai";
import { counterAtom } from "../jotai/atoms";
import { localDateStringAtom } from "../jotai/selectors";

function Left3() {
  const count = useAtomValue(counterAtom);
  const date = useAtomValue(localDateStringAtom);

  useEffect(() => {
    console.log("      # Left3 렌더링.");
  });

  return (
    <div>
      <h3>Left3 - {date}</h3>
      <span>{count}</span>
    </div>
  );
}

export default Left3;
