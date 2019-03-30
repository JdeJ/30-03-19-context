import React, { Component } from 'react';

class GetCurrentPosition extends Component {
  state = {
    position: {},
    loading: true,
  };
  componentDidMount() {
    navigator.geolocation.getCurrentPosition(
      pos => {
        var crd = pos.coords;
        // console.log('Your current position is:');
        // console.log(`Latitude : ${crd.latitude}`);
        // console.log(`Longitude: ${crd.longitude}`);
        // console.log(`More or less ${crd.accuracy} meters.`);
        this.setState({
          position: crd,
          loading: false,
        });
      },
      err => {
        console.warn(`ERROR(${err.code}): ${err.message}`);
      }
    );
  }

  render() {
    const { position, loading } = this.state;
    const { children } = this.props;
    return <div>{loading ? 'loading' : children(position)}</div>;
  }
}

export default GetCurrentPosition;
