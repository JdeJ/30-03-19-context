import React, { Component } from 'react';
import Navbar from './components/Navbar';
import Container from './components/Container';
import Counter from './components/Counter';
class App extends Component {
  render() {
    return (
      <div className="App">
        <Navbar />
        <Container>
          <Counter />
          <Counter />
        </Container>
      </div>
    );
  }
}

export default App;
