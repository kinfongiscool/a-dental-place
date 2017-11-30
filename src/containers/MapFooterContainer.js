import React, { Component } from 'react';
import styled, { css } from 'styled-components';
import FooterContainer from './FooterContainer.js';
import GoogleMapContainer from '../containers/GoogleMapContainer.js'

const Container = styled.div`
  max-width: 1024px;
  margin: auto;
`;

class MapFooterContainer extends Component {

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
        <FooterContainer mapHasCursor={ this.state.mapHasCursor } />
      </Container>
    );
  }

}

export default MapFooterContainer;
