import { Link } from "react-router-dom";

function TodoList() {
  return (
    <>
      <h2>할일 목록</h2>
      <div className="todo">
        <Link to={"/add"}>추가</Link>
        <br />
        <form className="search">
          <input type="text" autoFocus />
          <button type="submit">검색</button>
        </form>
        <ul className="todolist">
          <li>
            <span>1</span>
            <Link to={"/detail"}>잠자기</Link>
            <Link to={"/list"}>삭제</Link>
          </li>
          <li>
            <span>2</span>
            <Link to={"/detail"}>자바스크립트 복습</Link>
            <Link to={"/list"}>삭제</Link>
          </li>
          <li>
            <span>3</span>
            <Link to={"/detail"}>
              <s>리액트 과제 하기</s>
            </Link>
            <Link to={"/list"}>삭제</Link>
          </li>
        </ul>
      </div>
    </>
  );
}

export default TodoList;
