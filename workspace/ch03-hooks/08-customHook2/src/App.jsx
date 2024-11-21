import Header from "@components/Header";
import { useState, useEffect } from "react";

const BASE_URL = "https://todo-api.fesp.shop/api";

function App() {
  const [items, setItems] = useState([]);

  const fetchTodoList = async () => {
    try {
      const res = await fetch(`${BASE_URL}/todolist`);

      const { items, pagination } = await res.json();

      setItems(items);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    fetchTodoList();
  }, []);

  return (
    <>
      <Header title="08 customHook2" />
      <ul>
        {items.map((item) => (
          <li key={item["_id"]}>
            {item.title} - {item.done ? "완료" : "미완료"}
          </li>
        ))}
      </ul>
    </>
  );
}

export default App;
