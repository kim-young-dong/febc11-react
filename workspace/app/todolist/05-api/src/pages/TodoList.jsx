import { Link, Outlet } from "react-router-dom";
import useAxiosInstance from "@hooks/useAxiosInstance";
import TodoListItem from "./TodoListItem";
import { useState, useEffect } from "react";

function TodoList() {
  const [todos, setTodos] = useState(null);
  const axios = useAxiosInstance();

  useEffect(() => {
    // Fetch data whenever the location changes
    axios
      .get("todolist")
      .then((response) => {
        setTodos(response.data.items);
      })
      .catch((error) => {
        alert(error.response.data.message);
      });
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
