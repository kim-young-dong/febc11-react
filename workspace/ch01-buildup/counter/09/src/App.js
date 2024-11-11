import Renos from "../Renos.js";
import Header from "./Header.js";
import Counter from "./Counter.js";

function App() {
  return Renos.createElement("div", { id: "app" }, Header, Counter);
}

export default App;
