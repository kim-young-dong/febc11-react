import { Component } from "react";
import Parent from "./ClassBase";

class App extends Component {
  render() {
    return (
      <div>
        <h1>App</h1>
        <Parent />
      </div>
    );
  }
}

export default App;
