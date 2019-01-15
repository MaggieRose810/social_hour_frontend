import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import ListCompanies from './components/ListCompanies.js';
import TextSignUp from './components/TextSignUp.js';

class App extends Component {
  render() {
    return (
      <div className="App">
        <ListCompanies />
        <TextSignUp onClick={console.log}/>
      </div>
    );
  }
}

export default App;
