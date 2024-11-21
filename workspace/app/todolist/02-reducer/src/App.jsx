import Header from "@components/Header";
import TodoContainer from "@pages/TodoContainer";
import Footer from "@components/Footer";

function App() {
  return (
    <>
      <Header />
      <div id="main">
        <TodoContainer />
      </div>
      <Footer />
    </>
  );
}

export default App;
