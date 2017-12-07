import React, { Component } from 'react';
import styled, { css } from 'styled-components';
import Address from './Address.js';
import logo from '../images/logo.svg';

const AdpHeader = styled.div`
  max-width: 1024px;
  margin: auto;
  display: flex;
  align-items: center;

  img {
    flex-grow: 0;
    margin: 1rem 0 1rem 1.5rem;
  }
  .header-contact-info {
    flex-grow: 1;
    margin: 2rem 1.5rem 1rem 0;
  }
`;

const PhoneNumber = styled.p`
  font-size: 120%;
  margin: 0 0 0 0;
  color: #58A6FF;
  text-align: right;
`;

class HeaderTop extends Component {

  render() {
    return (
      <AdpHeader>
        <img src={logo} className="logo" alt="logo" />
        <div className="header-contact-info">
          <PhoneNumber>Call: (630) 620-7300</PhoneNumber>
          <Address isHeader/>
        </div>
      </AdpHeader>
    );
  }

}

export default HeaderTop;
