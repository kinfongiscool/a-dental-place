import React, { Component } from 'react';
import logo from '../images/logo.svg';
import HeaderContainer from './HeaderContainer.js';
import CarouselContainer from './CarouselContainer.js';
import DoctorsContainer from './DoctorsContainer.js';
import DentalServicesContainer from './DentalServicesContainer.js';
import MapFooterContainer from './MapFooterContainer.js'
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <HeaderContainer />
        <CarouselContainer />
        <DoctorsContainer />
        <DentalServicesContainer />
        <MapFooterContainer />
      </div>
    );
  }
}

export default App;
