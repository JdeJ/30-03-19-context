import React, { Component } from 'react';

class Map extends Component {
  render() {
    const { latitude, longitude } = this.props.position;
    return (
      <div>
        Mi Posicion es lat: {latitude} y lng: {longitude}
      </div>
    );
  }
}

export default Map;
