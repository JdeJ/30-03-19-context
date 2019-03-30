import React, { Component } from 'react';
import Icon from './Icon';

class Navbar extends Component {
  render() {
    console.log('render');
    return (
      <div>
        Navbar
        <Icon />
      </div>
    );
  }
}

export default Navbar;
