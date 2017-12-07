import React, { Component } from 'react';
import styled from 'styled-components';
import logo from '../images/logo.svg';
import HeaderContainer from './HeaderContainer.js';
import CarouselContainer from './CarouselContainer.js';
import DoctorsContainer from './DoctorsContainer.js';
import DentalServicesContainer from './DentalServicesContainer.js';
import MapContainer from './MapContainer.js';
import FooterContainer from './FooterContainer.js';

const AppContainer = styled.div`
  text-align: center;
`;

class App extends Component {
  render() {
    return (
      <AppContainer>
        <HeaderContainer />
        <CarouselContainer />
        <DoctorsContainer />
        <DentalServicesContainer />
        <MapContainer />
        <FooterContainer />
      </AppContainer>
    );
  }
}

export default App;
