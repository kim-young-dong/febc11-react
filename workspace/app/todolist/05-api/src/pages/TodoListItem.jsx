import { Link } from "react-router-dom";
import PropTypes from "prop-types";

function TodoListItem({ todo, onDelete }) {
  return (
    <li>
      <span>{todo._id}</span>
      <Link to={`/list/${todo._id}`}>
        {todo.done ? <s>{todo.title}</s> : todo.title}
      </Link>
      <button onClick={() => onDelete(todo._id)}>삭제</button>
    </li>
  );
}

TodoListItem.propTypes = {
  todo: PropTypes.shape({
    _id: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    done: PropTypes.bool,
  }).isRequired,
  onDelete: PropTypes.func.isRequired,
};

export default TodoListItem;
