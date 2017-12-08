import React, { Component } from 'react';
import styled from 'styled-components';
import { media } from '../media.js';
import ADentalPlaceName from './ADentalPlaceName.js';
import Address from './Address.js';
import PhoneFax from './PhoneFax.js';

const MapAddressBoxContainer = styled.div`
  background-color: #58A6FF;
  margin: auto 1rem auto auto;
  padding: 2rem;
  flex: 1;
  z-index: 10;
  position: relative;
  bottom: 4rem;
  transition: transform 150ms ease-in-out;
  transform: ${props => props.mapHasCursor ? 'translate(0, 4rem)' : ''};

  ${media.tablet`
    bottom: 0;
    transform: none;
  `}

  ${media.phone`
    margin: auto 1rem 1rem 1rem;
  `}
`;


class MapAddressBox extends Component {

  render() {

    var mapHasCursor = this.props.mapHasCursor;

    return (
      <MapAddressBoxContainer mapHasCursor={ this.props.mapHasCursor }>
        <ADentalPlaceName />
        <Address />
      </MapAddressBoxContainer>
    );
  }

}

export default MapAddressBox;
