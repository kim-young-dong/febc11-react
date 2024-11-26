import { Link, useOutletContext, useParams } from "react-router-dom";
import { useState, useEffect } from "react";

function TodoEdit() {
  const { todoItem } = useOutletContext();
  const { _id } = useParams();
  const [todo, setTodo] = useState();

  useEffect(() => {
    setTodo(todoItem);
  }, [todoItem]);

  return (
    <>
      <h2>할일 수정</h2>
      {todo && (
        <div className="todo">
          <form>
            <label htmlFor="title">제목 :</label>
            <input type="text" id="title" value={todo.title} autoFocus />
            <br />
            <label htmlFor="content">내용 :</label>
            <textarea id="content" cols="23" rows="5">
              {todo.content}
            </textarea>
            <br />
            <label htmlFor="done">완료 :</label>
            <input
              type="checkbox"
              id="done"
              value={todo.done}
              defaultChecked={todo.done}
            />
            <br />
            <Link to={"/detail"}>수정</Link>
            <Link to={"/detail"}>취소</Link>
          </form>
        </div>
      )}
    </>
  );
}

export default TodoEdit;
