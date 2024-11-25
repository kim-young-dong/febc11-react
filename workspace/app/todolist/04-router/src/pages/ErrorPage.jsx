import { useRouteError } from "react-router-dom";

function EfforPage() {
  const error = useRouteError();
  const messenge =
    error.status === 404
      ? "페이지를 찾을 수 없습니다."
      : "에러가 발생했습니다.";
  return (
    <>
      <div className="todo">
        <h2>에러 발생</h2>
        <p>{messenge}</p>
      </div>
    </>
  );
}

export default EfforPage;
