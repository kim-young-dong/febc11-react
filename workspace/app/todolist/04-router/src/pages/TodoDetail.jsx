import { Link, Outlet, useOutletContext, useParams } from "react-router-dom";
import { useState, useEffect } from "react";

const dummyData = {
  item: {
    _id: 5,
    title: "Javascript 공부",
    content: "열심히 하자",
    done: false,
    createdAt: "2024.11.21 16:49:00",
    updatedAt: "2024.11.21 16:49:00",
  },
};

function TodoDetail() {
  const { _id } = useParams();
  const [todoItem, setTodoItem] = useState();

  useEffect(() => {
    // API 호출

    setTodoItem(dummyData.item);
  }, [_id]);

  return (
    <>
      <main id="main">
        <h2>할일 상세 보기</h2>
        {todoItem && (
          <>
            <div className="todo">
              <div>제목 : {todoItem.title}</div>
              <div>내용 : {todoItem.content}</div>
              <div>상태 : {todoItem.done ? "완료" : "미완료"}</div>
              <div>작성일 : {todoItem.createdAt}</div>
              <div>수정일 : {todoItem.updatedAt}</div>
              <Link to={"./edit"}>수정</Link>
              <Link to={"/list"}>목록</Link>
            </div>
            <Outlet
              context={{
                todoItem,
              }}
            />
          </>
        )}
      </main>
    </>
  );
}

export default TodoDetail;
