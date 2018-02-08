import React, { Component } from 'react';
import CarouselContainer from './CarouselContainer.js';
import DoctorsContainer from './DoctorsContainer.js';
import DentalServicesContainer from './DentalServicesContainer.js';
import MapContainer from './MapContainer.js';
import FooterContainer from './FooterContainer.js';

class Home extends Component {

  render() {
    return (
      <div>
        <CarouselContainer />
        <DoctorsContainer />
        <DentalServicesContainer />
        <MapContainer />
        <FooterContainer />
      </div>
    );
  }

}

export default Home;
