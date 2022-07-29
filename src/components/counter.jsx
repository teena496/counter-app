import React, { Component } from "react";

class Counter extends Component {
  render() {
    const { counter, onIncrement, onDelete } = this.props;

    return (
      <>
        <span>{counter.value ? counter.value : "Zero"}</span>
        &nbsp;
        <button onClick={() => onIncrement(counter)}>Increment</button>
        &nbsp;
        <button onClick={() => onDelete(counter.id)}>Delete</button>
      </>
    );
  }
}

export default Counter;
