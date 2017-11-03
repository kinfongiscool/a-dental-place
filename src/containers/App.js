import React, { Component } from 'react';
import logo from '../images/logo.svg';
import Header from '../components/Header.js'
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header className="Header" />
      </div>
    );
  }
}

export default App;
