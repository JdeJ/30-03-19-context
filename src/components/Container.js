import React, { Component } from 'react';
import styled from 'styled-components';

const Div = styled.div`
  width: 90%;
  margin: 0 auto;
`;

class Container extends Component {
  render() {
    const { children } = this.props;
    return <Div>{children}</Div>;
  }
}

export default Container;
