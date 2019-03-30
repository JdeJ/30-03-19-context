import React, { Component } from 'react';
import { withCounter } from './CounterProvider';

class Icon extends Component {
  render() {
    return <div>Icon {this.props.counter}</div>;
  }
}

const WithCounter = withCounter(Icon);

export default WithCounter;
