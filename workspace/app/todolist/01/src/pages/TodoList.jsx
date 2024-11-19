import TodoItem from "./TodoItem";
import PropTypes from "prop-types";

TodoList.propTypes = {
  itemList: PropTypes.array.isRequired,
  onToggleDone: PropTypes.func.isRequired,
  onDeleteTodo: PropTypes.func.isRequired,
};

function TodoList({ itemList, onToggleDone, onDeleteTodo }) {
  return (
    <ul className="todolist">
      {itemList.map((item) => (
        <TodoItem
          key={item._id}
          item={item}
          onTodoDone={onToggleDone}
          onDeleteTodo={onDeleteTodo}
        />
      ))}
    </ul>
  );
}

export default TodoList;
