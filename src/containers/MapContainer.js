import React, { Component } from 'react';
import styled, { css } from 'styled-components';
import GoogleMapContainer from '../containers/GoogleMapContainer.js'
import MapAddressBox from '../components/MapAddressBox.js';
import MapHoursBox from '../components/MapHoursBox.js';

const Container = styled.div`
  max-width: 1024px;
  margin: auto;
`;

const MapBoxContainer = styled.div`
  display: flex;
  justify-content: center;
  background-color: #2A6BB4;
  padding: 0 2rem 0 2rem;
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
      <Container>
        <div
          onMouseEnter={ this.mouseEnter }
          onMouseLeave={ this.mouseLeave }>
          <GoogleMapContainer />
        </div>
        <MapBoxContainer mapHasCursor={ this.state.mapHasCursor }>
          <MapAddressBox mapHasCursor={ this.state.mapHasCursor }/>
          <MapHoursBox mapHasCursor={ this.state.mapHasCursor }/>
        </MapBoxContainer>
      </Container>
    );
  }

}

export default MapContainer;
