import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import ListCompanies from './components/ListCompanies.js';

class App extends Component {
  render() {
    return (
      <div className="App">
        <ListCompanies />
      </div>
    );
  }
}

export default App;
