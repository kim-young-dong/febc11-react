import { Component } from "react";
import PropsType from "prop-types";

ClassBase.propTypes = {
  level: PropsType.number,
};

class ClassBase extends Component {
  constructor(props) {
    super(props);
    this.state = { count: 0 };
  }

  state = { count: 0 };

  increase = () => {
    this.setState({ count: this.state.count + 1 });
  };

  render() {
    return (
      <div>
        클릭 수: {this.state.count * this.props.level}
        <button onClick={this.increase}>Click Me</button>
      </div>
    );
  }
}

class Parent extends Component {
  render() {
    return (
      <div>
        <h1>Parent</h1>
        <ClassBase level={1} />
        <ClassBase level={1} />
        <ClassBase level={2} />
        <ClassBase level={3} />
        <ClassBase level={4} />
        <ClassBase level={5} />
      </div>
    );
  }
}

export default Parent;
