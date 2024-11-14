import { useState } from "react";

function App() {
  const [position, setPosition] = useState({ x: 0, y: 0 });

  return (
    <>
      {/* <h1>03 상태관리 대상이 객체일 경우 주의 사항</h1> */}
      <div
        style={{
          position: "relative",
          width: "100vw",
          height: "100vh",
        }}
        onMouseMove={(event) => {
          // console.log(
          //   "e.clientX, e.clientY:",
          //   event.nativeEvent.offsetX,
          //   event.nativeEvent.offsetY
          // );

          setPosition({
            x: event.clientX,
            y: event.clientY,
          });
        }}
      >
        <div
          style={{
            position: "absolute",
            backgroundColor: "red",
            borderRadius: "50%",
            transform: `translate(${-10}px, ${-10}px)`,
            left: position.x,
            top: position.y,
            width: 20,
            height: 20,
          }}
        />
      </div>
    </>
  );
}

export default App;
