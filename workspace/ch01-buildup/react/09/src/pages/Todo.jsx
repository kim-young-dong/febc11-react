import TodoList from "./TodoList";

function Todo({ itemList }) {
  return (
    <div id="container">
      <TodoList itemList={itemList} />
    </div>
  );
}

export default Todo;
