import React, { Component } from 'react';
import styled, { css } from 'styled-components';
import { withScriptjs, withGoogleMap, GoogleMap, Marker } from "react-google-maps"

const MyMapComponent = withScriptjs(withGoogleMap((props) =>
  <GoogleMap
    defaultZoom={ 14 }
    defaultCenter={ { lat: 41.8693831, lng: -88.01745449999999 } } >
    {props.isMarkerShown && <Marker position={ { lat: 41.8693831, lng: -88.01745449999999 } } />}
  </GoogleMap>
))

const Container = styled.div`
  max-width: 1024px;
  margin: auto;
`;

class MapFooterContainer extends Component {

  render() {
    return (
      <Container>
        <MyMapComponent
          isMarkerShown
          googleMapURL="https://maps.googleapis.com/maps/api/js?key=AIzaSyCSRDGzcdVMBOI6Icn5Qv1IBzHsNxWRKnQ&v=3.exp&libraries=geometry,drawing,places"
          loadingElement={ <div style={ { height: `100%` } } /> }
          containerElement={ <div style={ { height: `400px` } } /> }
          mapElement={ <div style={ { height: `100%` } } /> }
        />
      </Container>
    );
  }

}

export default MapFooterContainer;
