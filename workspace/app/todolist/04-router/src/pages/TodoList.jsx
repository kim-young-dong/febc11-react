import { Link, Outlet } from "react-router-dom";

function TodoList() {
  const itemList = [
    { _id: 1, title: "잠자기" },
    { _id: 2, title: "자바스크립트 복습" },
    { _id: 3, title: "리액트 과제 하기", done: true },
  ];
  return (
    <>
      <main id="main">
        <h2>할일 목록</h2>
        <div className="todo">
          <Link to={"/list/add"}>추가</Link>
          <br />
          <form className="search">
            <input type="text" autoFocus />
            <button type="submit">검색</button>
          </form>
          <ul className="todolist">
            {itemList.map((item) => (
              <li key={item._id}>
                <span>{item._id}</span>
                <Link to={`/list/${item._id}`}>{item.title}</Link>
                <Link to={"/list"}>삭제</Link>
              </li>
            ))}
            {/* <li>
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
              </li> */}
          </ul>
          <Outlet />
        </div>
      </main>
    </>
  );
}

export default TodoList;
