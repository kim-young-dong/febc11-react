import Todo from "@pages/Todo";

import TodoReducer from "@pages/TodoReducer";
import { useReducer, useCallback } from "react";

const initialState = [
  { _id: 1, title: "React 학습", done: false },
  { _id: 2, title: "React-Native 학습", done: false },
  { _id: 3, title: "TypeScript 학습", done: false },
];

function TodoContainer() {
  const [itemList, dispatch] = useReducer(TodoReducer, initialState);

  const handleAddTodo = useCallback((title) => {
    console.log("handleAddTodo", title);

    dispatch({
      type: "ADD",
      value: {
        title,
      },
    });
  }, []);

  const handleTodoDone = useCallback((id) => {
    dispatch({ type: "TOGGLE", value: { id } });
  }, []);

  const handleDeleteTodo = useCallback((id) => {
    dispatch({ type: "DELETE", value: { id } });
  }, []);

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
