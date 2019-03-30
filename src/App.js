import React, { Component } from 'react';
import Navbar from './components/Navbar';
import Container from './components/Container';
import Counter from './components/Counter';
import CounterProvider from './components/CounterProvider';
import Map from './components/Map';
import GetCurrentPosition from './components/GetCurrentPosition';

class App extends Component {
  render() {
    return (
      <CounterProvider>
        <div className="App">
          <Navbar />
          <GetCurrentPosition>
            {position => {
              return <Map position={position} />;
            }}
          </GetCurrentPosition>
          <Container>
            <Counter />
            <Counter />
            <GetCurrentPosition>
              {position => {
                return <Map position={position} />;
              }}
            </GetCurrentPosition>
          </Container>
        </div>
      </CounterProvider>
    );
  }
}

export default App;
