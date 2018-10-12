import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Company from './components/Company.js';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Company name="Dunder Mifflin" description="This is a paper company" />
      </div>
    );
  }
}

export default App;
