import "./App.css";
// import { useState } from "react";
import Header from "@components/Header";
import Counter from "@components/Counter";
import Footer from "@components/Footer";

function App() {
  return (
    <div id="todo">
      <Header />
      <div id="main">
        <Counter />
      </div>
      <Footer />
    </div>
  );
}

export default App;
