import Header from "../components/Header";
import Todo from "./Todo";
import Footer from "../components/Footer";

function App() {
  const itemList = [
    { _id: 1, title: "두부", done: true },
    { _id: 2, title: "계란", done: false },
    { _id: 3, title: "라면", done: true },
  ];
  return (
    <div id="todo">
      <Header />
      <div id="main">
        <Todo itemList={itemList} />
      </div>
      <Footer />
    </div>
  );
}

export default App;
