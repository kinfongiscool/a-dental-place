import React, { Component } from 'react';
import styled, { css } from 'styled-components';
import { media } from '../media.js';
import Address from './Address.js';
import logo from '../images/logo.svg';

const AdpHeader = styled.div`
  max-width: 1024px;
  margin: auto;
  display: flex;
  align-items: center;

  ${media.phone`
    display: inline-block;
    text-align: center;
    margin: 2rem 0 2rem 0;
  `}
`;

const StyledHeaderImg = styled.img`
  flex-grow: 0;
  margin: 1rem 0 1rem 2rem;

  ${media.phone`
    margin: 2rem 0 1rem 0;
  `}
`;

const StyledHeaderContactInfo = styled.div`
  flex-grow: 1;
  margin: 2rem 2rem 1rem 0;
  ${media.phone`
    margin: 1rem 0 1rem 0;
  `}
`;

const PhoneNumber = styled.p`
  font-size: 120%;
  margin: 0 0 0 0;
  color: #58A6FF;
  text-align: right;

  ${media.phone`
    text-align: center;
  `}
`;

class HeaderTop extends Component {

  render() {
    return (
      <AdpHeader>
        <StyledHeaderImg src={logo} className="logo" alt="logo" />
        <StyledHeaderContactInfo className="header-contact-info">
          <PhoneNumber>Call: (630) 620-7300</PhoneNumber>
          <Address isHeader/>
        </StyledHeaderContactInfo>
      </AdpHeader>
    );
  }

}

export default HeaderTop;
