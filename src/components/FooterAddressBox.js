import React, { Component } from 'react';
import styled from 'styled-components';
import Address from './Address.js';
import PhoneFax from './PhoneFax.js';

const FooterAddressBoxContainer = styled.div`
  background-color: #58A6FF;
  margin: 0 1rem 0 0;
  padding: 2rem;
  flex: 1;
  z-index: 10;
  position: relative;
  bottom: 4rem;
  transition: transform 150ms ease-in-out;
  transform: ${props => props.mapHasCursor ? 'translate(0, 4rem)' : ''};
`;

const FooterAddressContainer = styled.div`
  padding-bottom: 1rem;
`;

const NameLine = styled.p`
  margin: 0 0 0 0;
  color: #FFF;
  text-align: left;
  font-weight: bold;
  padding-bottom: 1rem;
`;

class FooterAddressBox extends Component {

  render() {
    return (
      <FooterAddressBoxContainer mapHasCursor={ this.props.mapHasCursor }>
        <NameLine>A Dental Place, Ltd.</NameLine>
        <FooterAddressContainer>
          <Address />
        </FooterAddressContainer>
        <PhoneFax footer={ true }/>
      </FooterAddressBoxContainer>
    );
  }

}

export default FooterAddressBox;
