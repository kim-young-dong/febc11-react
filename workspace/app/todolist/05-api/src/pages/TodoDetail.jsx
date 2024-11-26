import { Link, Outlet, useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import useAxiosInstance from "@hooks/useAxiosInstance";

function TodoDetail() {
  const [todoItem, setTodoItem] = useState();

  const { _id } = useParams();
  const axios = useAxiosInstance();

  useEffect(() => {
    fetchTodoItem();
  }, []);

  const fetchTodoItem = async () => {
    axios
      .get(`todolist/${_id}`)
      .then((response) => {
        setTodoItem(response.data.item);
      })
      .catch((error) => {
        alert(error.response.data.message);
      });
  };

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
                todoItem: todoItem,
                refetch: fetchTodoItem,
              }}
            />
          </>
        )}
      </main>
    </>
  );
}

export default TodoDetail;
