import React, { Component } from 'react';
import logo from '../images/logo.svg';
import Header from '../components/Header.js'
import AdpCarousel from '../components/Carousel.js'
import CarouselCaption from '../components/CarouselCaption.js'
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header className="Header" />
        <AdpCarousel />
        <CarouselCaption />
      </div>
    );
  }
}

export default App;
