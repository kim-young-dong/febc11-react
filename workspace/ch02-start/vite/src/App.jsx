import "./App.css";
import { useState } from "react";
import Header from "@components/Header";
import Todo from "@pages/Todo";
import Footer from "@components/Footer";

function App() {
  const [itemList, setItemList] = useState([
    { _id: 1, title: "React 학습", done: false },
    { _id: 2, title: "JSX 학습", done: false },
    { _id: 3, title: "Component 학습", done: false },
  ]);

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
    <div id="todo">
      <Header />
      <div id="main">
        <Todo
          itemList={itemList}
          onAddTodo={handleAddTodo}
          onToggleDone={handleTodoDone}
          onDeleteTodo={handleDeleteTodo}
        />
      </div>
      <Footer />
    </div>
  );
}

export default App;
