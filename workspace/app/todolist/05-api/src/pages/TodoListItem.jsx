import { Link, useNavigate } from "react-router-dom";
import useAxiosInstance from "@hooks/useAxiosInstance";
import PropTypes from "prop-types";

function TodoListItem({ todo }) {
  const axios = useAxiosInstance();
  const navigate = useNavigate();

  const deleteTodo = () => {
    axios
      .delete(`todolist/${todo._id}`)
      .then(() => {
        alert("삭제되었습니다.");
        navigate(0);
      })
      .catch((error) => {
        alert(error.response.data.message);
      });
  };
  return (
    <li>
      <span>{todo._id}</span>
      <Link to={`/list/${todo._id}`}>
        {todo.done ? <s>{todo.title}</s> : todo.title}
      </Link>
      <button onClick={deleteTodo}>삭제</button>
    </li>
  );
}

TodoListItem.propTypes = {
  todo: PropTypes.shape({
    _id: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    done: PropTypes.bool,
  }).isRequired,
};

export default TodoListItem;
