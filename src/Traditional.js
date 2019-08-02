import React, { Component } from "react";

function LifecycleDemo() {
  return "I'm a lifecycle demo";
}
class Traditional extends Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 20,
      mounted: true
    };
  }
  componentDidMount() {
    console.log("render!");
  }
  componentWillUnmount() {
    console.log("unmounting...");
  }
  toggle = () => {
    this.setState({ mounted: !this.state.mounted });
  };
  render() {
    return (
      <div>
        Class Component
        <p>You clicked {this.state.count} times</p>
        <button onClick={() => this.setState({ count: this.state.count + 1 })}>
          Click me
        </button>
        <br/>
        <hr/>
        <div>
          <button onClick={this.toggle}>Show/Hide LifecycleDemo</button>
          <div>{this.state.mounted && <LifecycleDemo />}</div>
        </div>
      </div>
    );
  }
}

export default Traditional;
