import PropTypes from "prop-types";
import TodoInput from "./TodoInput";
import TodoList from "./TodoList";

function Todo(props) {
  return (
    <div id="container">
      <ul>
        <li>
          <h2>쇼핑 목록</h2>
          <TodoInput onAddTodo={props.onAddTodo} />
          <TodoList {...props} />
        </li>
      </ul>
    </div>
  );
}

Todo.propTypes = {
  itemList: PropTypes.arrayOf(
    PropTypes.shape({
      _id: PropTypes.number.isRequired,
      title: PropTypes.string.isRequired,
      done: PropTypes.bool.isRequired,
    })
  ).isRequired,
  onAddTodo: PropTypes.func.isRequired,
  onToggleDone: PropTypes.func.isRequired,
  onDeleteTodo: PropTypes.func.isRequired,
};

export default Todo;
