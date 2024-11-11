import PropTypes from "prop-types";
import TodoInput from "./TodoInput";
import TodoItem from "./TodoItem";

function TodoList({ itemList, onAddTodo, onToggleDone, onDeleteTodo }) {
  return (
    <ul>
      <li>
        <h2>쇼핑 목록</h2>
        <TodoInput onAddTodo={onAddTodo} />
        <ul className="todolist">
          {itemList.map((item, index) => (
            <TodoItem
              key={item._id}
              index={index + 1}
              item={item}
              onToggleDone={onToggleDone}
              onDeleteTodo={onDeleteTodo}
            />
          ))}
        </ul>
      </li>
    </ul>
  );
}

TodoList.propTypes = {
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

export default TodoList;
