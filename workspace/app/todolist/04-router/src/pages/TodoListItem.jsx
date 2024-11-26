import { Link } from "react-router-dom";
import PropTypes from "prop-types";

function TodoListItem({ todo }) {
  return (
    <li>
      <span>{todo._id}</span>
      <Link to={`/list/${todo._id}`}>
        {todo.done ? <s>{todo.title}</s> : todo.title}
      </Link>
      <Link to={"/list"}>삭제</Link>
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
