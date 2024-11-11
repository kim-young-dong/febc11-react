import React from "react";
import TodoInput from "./TodoInput";
import TodoItem from "./TodoItem";

function TodoList(props) {
  const [itemList, setItemList] = React.useState(props.itemList);

  const handleAddTodo = (title) => {
    const newItemList = [
      ...itemList,
      { _id: itemList[itemList.length - 1]._id + 1, title, done: false },
    ];
    setItemList(newItemList);
  };

  const handleTodoDone = (id) => {
    const newItemList = itemList.map((item) =>
      item._id === id ? { ...item, done: !item.done } : item
    );
    setItemList(newItemList);
  };

  const handleDeleteTodo = (id) => {
    const newItemList = itemList.filter((item) => item._id !== id);
    setItemList(newItemList);
  };

  return (
    <ul>
      <li>
        <h2>쇼핑 목록</h2>
        <TodoInput onAddTodo={handleAddTodo} />
        <ul className="todolist">
          {itemList.map((item) => (
            <TodoItem
              key={item._id}
              item={item}
              onTodoDone={handleTodoDone}
              onDeleteTodo={handleDeleteTodo}
            />
          ))}
        </ul>
      </li>
    </ul>
  );
}

export default TodoList;
