import PropTypes from "prop-types";

function TodoItem({ index, item, onToggleDone, onDeleteTodo }) {
  return (
    <li>
      <div>
        <span>{index}</span>
        <span onClick={() => onToggleDone(item._id)}>
          {item.done ? <s>{item.title}</s> : item.title}
        </span>
      </div>
      <button type="button" onClick={() => onDeleteTodo(item._id)}>
        삭제
      </button>
    </li>
  );
}
TodoItem.propTypes = {
  index: PropTypes.number.isRequired,
  item: PropTypes.shape({
    _id: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    done: PropTypes.bool.isRequired,
  }).isRequired,
  onToggleDone: PropTypes.func.isRequired,
  onDeleteTodo: PropTypes.func.isRequired,
};

export default TodoItem;
