import React, { Component } from 'react';
import styled from 'styled-components';
import { media } from '../media.js';
import ADentalPlaceName from './ADentalPlaceName.js';
import Address from './Address.js';
import PhoneFax from './PhoneFax.js';
import HoursUl from './HoursUl.js';

const StyledFooterContactInfoContainer = styled.div`
  flex: 1;
  text-align: left;
  ${media.phone`padding: 0 0 3rem 0;`}
`;

const StyledAddressContainer = styled.div`
  padding-bottom: 1rem;
`;

const StyledHoursP = styled.p`
  color: #FDFEFF;
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
