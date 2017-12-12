import React, { Component } from 'react';
import styled from 'styled-components';
import { media } from '../media.js';
import HoursUl from './HoursUl.js';

const StyledFooterHoursContainer = styled.div`

  ${media.phone`
    padding: 0 0 3rem 0;
  `}
`;

const StyledHoursP = styled.p`
  color: #FDFEFF;
  text-align: left;
`;

const HoursUlContainer = styled.div`
  display: flex;
  justify-content: space-between;

`;

class FooterHours extends Component {

  render() {
    return (
      <StyledFooterHoursContainer>
        <StyledHoursP>Hours:</StyledHoursP>
        <HoursUlContainer>
          <HoursUl />
        </HoursUlContainer>
      </StyledFooterHoursContainer>
    );
  }

}

export default FooterHours;
