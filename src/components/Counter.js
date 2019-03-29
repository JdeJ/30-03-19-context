import React, { Component } from 'react';
import styled from 'styled-components';

class Counter extends Component {
  state = {
    value: 0,
  };

  handleIncrement = () => {
    this.setState({
      value: this.state.value + 1,
    });
  };

  handleDecrease = () => {
    this.setState({
      value: this.state.value - 1,
    });
  };

  render() {
    const { value } = this.state;
    const { className } = this.props;
    return (
      <div className={className}>
        <h2>Counter</h2>
        <p>the value counter is {value}</p>
        <button onClick={this.handleIncrement}>Increment</button>
        <button onClick={this.handleDecrease}>Decrease</button>
      </div>
    );
  }
}

export default styled(Counter)`
  border-radius: 4px;
  border: 1px solid black;
  padding: 1rem;
`;
