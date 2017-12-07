import React, { Component } from 'react';
import styled from 'styled-components';

const StyledADentalPlaceName = styled.p`
  margin: 0 0 0 0;
  color: #FFF;
  text-align: left;
  font-weight: bold;
  padding-bottom: 1rem;
`;

class ADentalPlaceName extends Component {

  render() {
    return (
      <div>
        <StyledADentalPlaceName>A Dental Place, Ltd.</StyledADentalPlaceName>
      </div>
    );
  }

}

export default ADentalPlaceName;
