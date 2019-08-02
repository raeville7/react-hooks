import React, { Component } from "react";

class Traditional extends Component {
    constructor(props) {
        super(props)
        this.state = {
            count: 20
        }
    }
  render() {
    return (
      <div>
        <h3>{this.props.data} UseState</h3>
        <p>You clicked {this.state.count} times</p>
        <button onClick={() => this.setState({count: this.state.count + 1})}>Click me</button>
      </div>
    );
  }
}

export default Traditional;
