import React, { Component } from 'react';
import styled, { css } from 'styled-components';
import { media } from '../media.js';
import GoogleMapContainer from '../containers/GoogleMapContainer.js'
import MapAddressBox from '../components/MapAddressBox.js';
import MapHoursBox from '../components/MapHoursBox.js';

const MainContainer = styled.div`
  max-width: 1024px;
  margin: auto;
`;

const StyledMapContainer = styled.div`
`;

const MapBoxContainer = styled.div`
  background-color: #2A6BB4;
`;

const MapBoxFlexContainer = styled.div`
  display: flex;
  justify-content: center;
  padding: 1rem 2rem 1rem 2rem;

  ${media.phone`
    display: inline;
    padding: 2rem 2rem 2rem 2rem;
  `}
`;

class MapContainer extends Component {

  constructor(props) {
    super(props);

    this.state = {
        mapHasCursor: false
    }

    this.mouseEnter = this.mouseEnter.bind(this);
    this.mouseLeave = this.mouseLeave.bind(this);
  }

  mouseEnter() {
    this.setState({ mapHasCursor : true });
  }

  mouseLeave() {
    this.setState({ mapHasCursor : false });
  }

  render() {

    return (
      <StyledMapContainer>
        <MainContainer
          onMouseEnter={ this.mouseEnter }
          onMouseLeave={ this.mouseLeave }>
          <GoogleMapContainer />
        </MainContainer>
        <MapBoxContainer mapHasCursor={ this.state.mapHasCursor }>
          <MainContainer>
            <MapBoxFlexContainer>
              <MapAddressBox mapHasCursor={ this.state.mapHasCursor }/>
              <MapHoursBox mapHasCursor={ this.state.mapHasCursor }/>
            </MapBoxFlexContainer>
          </MainContainer>
        </MapBoxContainer>
      </StyledMapContainer>
    );
  }

}

export default MapContainer;
