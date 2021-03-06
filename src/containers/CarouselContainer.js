import React, { Component } from 'react';
import AdpCarousel from '../components/Carousel.js';
import CarouselCaption from '../components/CarouselCaption.js';

class CarouselContainer extends Component {

  render() {
    return (
      <div>
        <AdpCarousel />
        <CarouselCaption />
      </div>
    );
  }

}

export default CarouselContainer;
