import TodoInput from "./TodoInput";
import TodoList from "./TodoList";
import PropTypes from "prop-types";

Todo.propTypes = {
  itemList: PropTypes.array.isRequired,
  onAddTodo: PropTypes.func.isRequired,
  onToggleDone: PropTypes.func.isRequired,
  onDeleteTodo: PropTypes.func.isRequired,
};

function Todo({ itemList, onAddTodo, onToggleDone, onDeleteTodo }) {
  return (
    <div id="container">
      <ul>
        <li>
          <h2>쇼핑 목록</h2>
          <TodoInput onAddTodo={onAddTodo} />
          <TodoList
            itemList={itemList}
            onToggleDone={onToggleDone}
            onDeleteTodo={onDeleteTodo}
          />
        </li>
      </ul>
    </div>
  );
}

export default Todo;
