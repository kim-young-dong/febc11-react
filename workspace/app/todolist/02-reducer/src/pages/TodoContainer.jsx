import Todo from "@pages/Todo";

import TodoReducer from "@pages/TodoReducer";
import { useReducer } from "react";

const initialState = [
  { _id: 1, title: "React 학습", done: false },
  { _id: 2, title: "React-Native 학습", done: false },
  { _id: 3, title: "TypeScript 학습", done: false },
];

function TodoContainer() {
  const [itemList, dispatch] = useReducer(TodoReducer, initialState);

  const handleAddTodo = (title) => {
    dispatch(itemList, {
      type: "ADD",
      value: {
        title,
      },
    });
  };

  const handleTodoDone = (id) => {
    dispatch(itemList, { type: "TOGGLE", value: { id } });
  };

  const handleDeleteTodo = (id) => {
    dispatch({ type: "DELETE", value: { id } });
  };
  return (
    <>
      <Todo
        itemList={itemList}
        onAddTodo={handleAddTodo}
        onToggleDone={handleTodoDone}
        onDeleteTodo={handleDeleteTodo}
      />
    </>
  );
}

export default TodoContainer;
