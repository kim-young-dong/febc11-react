import { Link, Outlet, useSearchParams } from "react-router-dom";
import useAxiosInstance from "@hooks/useAxiosInstance";
import TodoListItem from "./TodoListItem";
import Pagination from "@components/Pagination";
import { useState, useRef, useEffect } from "react";

function TodoList() {
  const [todos, setTodos] = useState(null);
  const searchRef = useRef();
  const pageRef = useRef();

  const [searchParam, setSearchParam] = useSearchParams();

  const axios = useAxiosInstance();

  const params = {
    keyword: searchParam.get("keyword"),
    page: searchParam.get("page"),
    limit: 10,
  };

  const fetchTodoList = (params) => {
    axios
      .get("todolist", { params })
      .then((response) => {
        setTodos(response.data.items);

        pageRef.current = response.data.pagination;
      })
      .catch((error) => {
        alert(error.response.data.message);
      });
  };

  useEffect(() => {
    // Fetch data whenever the location changes
    fetchTodoList(params);
  }, [searchParam]);

  const handleSearch = (event) => {
    event.preventDefault();
    const keyword = searchRef.current.value;
    const page = 1;
    // 브라우저 주소 변경
    setSearchParam(new URLSearchParams({ keyword, page }));
  };

  const handleDelete = (id) => {
    axios
      .delete(`todolist/${id}`)
      .then(() => {
        alert("삭제되었습니다.");
        fetchTodoList();
      })
      .catch((error) => {
        alert(error.response.data.message);
      });
  };

  const todoList = todos?.map((item) => (
    <TodoListItem key={item._id} todo={item} onDelete={handleDelete} />
  ));

  return (
    <>
      <main id="main">
        <h2>할일 목록</h2>
        <div className="todo">
          <Link to={"/list/add"}>추가</Link>
          <br />
          <form className="search" onSubmit={handleSearch}>
            <input
              type="text"
              ref={searchRef}
              defaultValue={params.keyword}
              autoFocus
            />
            <button type="submit">검색</button>
          </form>
          <ul className="todolist">{todoList}</ul>
          <Pagination
            totalPages={pageRef.current?.totalPages}
            currentPage={pageRef.current?.page}
          />
          <Outlet />
        </div>
      </main>
    </>
  );
}

export default TodoList;
