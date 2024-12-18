import { Link, Outlet } from "react-router-dom";
import { useState, useEffect } from "react";
import TodoListItem from "./TodoListItem";

const dummyData = [
  {
    _id: 1,
    title: "Javascript 공부",
    content: "열심히 하자",
    done: false,
    createdAt: "2024.11.21 16:49:00",
    updatedAt: "2024.11.21 16:49:00",
  },
  {
    _id: 2,
    title: "Javascript 공부",
    content: "열심히 하자",
    done: false,
    createdAt: "2024.11.21 16:49:00",
    updatedAt: "2024.11.21 16:49:00",
  },
  {
    _id: 3,
    title: "Javascript 공부",
    content: "열심히 하자",
    done: false,
    createdAt: "2024.11.21 16:49:00",
    updatedAt: "2024.11.21 16:49:00",
  },
];

function TodoList() {
  const [todos, setTodos] = useState();

  useEffect(() => {
    setTodos(dummyData);
  }, []);

  const todoList = todos?.map((item) => (
    <TodoListItem key={item._id} todo={item} />
  ));

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
          <ul className="todolist">{todoList}</ul>
          <Outlet />
        </div>
      </main>
    </>
  );
}

export default TodoList;
