import PropTypes from "prop-types";

TodoItem.propTypes = {
  item: PropTypes.shape({
    _id: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    done: PropTypes.bool.isRequired,
  }).isRequired,
  onTodoDone: PropTypes.func.isRequired,
  onDeleteTodo: PropTypes.func.isRequired,
};

function TodoItem({ item, onTodoDone, onDeleteTodo }) {
  return (
    <li>
      <span>{item._id}</span>
      <span onClick={() => onTodoDone(item._id)}>
        {item.done ? <s>{item.title}</s> : item.title}
      </span>
      <button type="button" onClick={() => onDeleteTodo(item._id)}>
        삭제
      </button>
    </li>
  );
}

export default TodoItem;
