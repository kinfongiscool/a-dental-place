import React, { Component } from 'react';
import styled from 'styled-components';
import ADentalPlaceName from './ADentalPlaceName.js';
import Address from './Address.js';
import PhoneFax from './PhoneFax.js';
import HoursUl from './HoursUl.js';

const StyledFooterContactInfoContainer = styled.div`
  flex: 1;
  text-align: left;
`;

const StyledAddressContainer = styled.div`
  padding-bottom: 1rem;
`;

const StyledHoursP = styled.p`
  color: white;
`;

const HoursUlContainer = styled.div`
  display: flex;
  justify-content: space-between;

`;

class FooterContactInfo extends Component {

  render() {
    return (
      <StyledFooterContactInfoContainer>
        <ADentalPlaceName />
        <StyledAddressContainer>
          <Address />
        </StyledAddressContainer>
        <PhoneFax white={ true }/>
        <StyledHoursP>Hours:</StyledHoursP>
        <HoursUlContainer>
          <HoursUl />
        </HoursUlContainer>
      </StyledFooterContactInfoContainer>
    );
  }

}

export default FooterContactInfo;
