import Header from "@components/Header";
import Todo from "@pages/Todo";
import Footer from "@components/Footer";
import { produce } from "immer";

import { useState } from "react";

function App() {
  const [itemList, setItemList] = useState([
    { _id: 1, title: "React 학습", done: true },
    { _id: 2, title: "JSX 학습", done: false },
    { _id: 3, title: "Component 학습", done: false },
  ]);

  const handleAddTodo = (title) => {
    const newItemList = itemList.concat({
      _id: Math.max(...itemList.map((item) => item._id)) + 1,
      title,
      done: false,
    });

    setItemList(newItemList);
  };

  const handleTodoDone = (id) => {
    const newItemList = produce(itemList, (draft) => {
      const item = draft.find((item) => item._id === id);
      item.done = !item.done;
    });
    setItemList(newItemList);
  };

  const handleDeleteTodo = (id) => {
    const newItemList = itemList.filter((item) => item._id !== id);
    setItemList(newItemList);
  };
  return (
    <>
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
    </>
  );
}

export default App;
