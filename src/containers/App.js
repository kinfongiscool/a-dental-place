import React, { Component } from 'react';
import logo from '../images/logo.svg';
import HeaderContainer from './HeaderContainer.js';
import CarouselContainer from './CarouselContainer.js';
import DoctorsContainer from './DoctorsContainer.js';
import ServicesContainer from './ServicesContainer.js';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <HeaderContainer />
        <CarouselContainer />
        <DoctorsContainer />
        <ServicesContainer />
      </div>
    );
  }
}

export default App;
