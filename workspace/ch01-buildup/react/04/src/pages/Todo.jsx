import PropTypes from "prop-types";
import TodoList from "./TodoList";

function Todo({ itemList, onAddTodo, onToggleDone, onDeleteTodo }) {
  return (
    <div id="container">
      <TodoList
        itemList={itemList}
        onAddTodo={onAddTodo}
        onToggleDone={onToggleDone}
        onDeleteTodo={onDeleteTodo}
      />
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
