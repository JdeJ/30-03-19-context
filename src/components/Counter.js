import React, { Component } from 'react';
// import styled from 'styled-components';
import { withCounter } from './CounterProvider';

class Counter extends Component {
  render() {
    const { className, counter, increment, decrease } = this.props;
    return (
      <div className={className}>
        <h2>Counter</h2>
        <p>the value counter is {counter}</p>
        <button onClick={increment}>Increment</button>
        <button onClick={decrease}>Decrease</button>
      </div>
    );
  }
}

export default withCounter(Counter);
