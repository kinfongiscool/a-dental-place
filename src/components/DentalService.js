import React, { Component } from 'react';
import styled, { css } from 'styled-components';
import { media } from '../media.js';
import DentalServiceButton from './DentalServiceButton.js'

const StyledDentalService = styled.div`
  ${media.tablet`
    margin-bottom: 2rem;
  `}
`;

class DentalService extends Component {

  render() {
    return (
      <StyledDentalService>
        <img src={ this.props.image } alt={ this.props.name } />
        <DentalServiceButton url={ this.props.url } text={ this.props.name } />
      </StyledDentalService>
    );
  }

}

export default DentalService;
