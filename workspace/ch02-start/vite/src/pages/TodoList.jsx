import PropTypes from "prop-types";

import TodoItem from "./TodoItem";

function TodoList({ itemList, onToggleDone, onDeleteTodo }) {
  return (
    <>
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
    </>
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
  onToggleDone: PropTypes.func.isRequired,
  onDeleteTodo: PropTypes.func.isRequired,
};

export default TodoList;
