import React, { Component } from 'react';
import styled, { css } from 'styled-components';
import { withScriptjs, withGoogleMap, GoogleMap, Marker } from "react-google-maps"
import FooterContainer from './FooterContainer.js';
import Box3 from '../components/Box3.js'

const MyMapComponent = withScriptjs(withGoogleMap((props) =>
  <GoogleMap
    defaultZoom={ 14 }
    defaultCenter={ { lat: 41.8693831, lng: -88.01745449999999 } } >
    { props.isMarkerShown && <Marker position={ { lat: 41.8693831, lng: -88.01745449999999 } } />}
  </GoogleMap>
))

const Container = styled.div`
  max-width: 1024px;
  margin: auto;
`;



const Box1 = styled.div`
  width: 100%;
  height: 4rem;
  background-color: darkseagreen;
`;

const Box2 = styled.div`
  width: 100%;
  height: 4rem;
  background-color: palevioletred;
`;

const Wrapper = styled.div`
  ${Box1}:hover + ${Box2} {
      background-color: greenyellow;
  }
`;

class MapFooterContainer extends Component {

  render() {
    return (
      <Container>

        <Wrapper>
          <Box1/>
          <Box2/>
          <Box3/>
        </Wrapper>

        <MyMapComponent
          isMarkerShown
          googleMapURL="https://maps.googleapis.com/maps/api/js?key=AIzaSyCSRDGzcdVMBOI6Icn5Qv1IBzHsNxWRKnQ&v=3.exp&libraries=geometry,drawing,places"
          loadingElement={ <div style={ { height: `100%` } } /> }
          containerElement={ <div style={ { height: `400px` } } /> }
          mapElement={ <div style={ { height: `100%` } } /> }
        />
        <FooterContainer />
      </Container>
    );
  }

}

export default MapFooterContainer;
