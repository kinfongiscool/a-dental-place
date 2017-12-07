import React, { Component } from 'react';
import styled from 'styled-components';

const StyledPhoneFaxContainer = styled.div`
  ${props => {
    if (props.bottomMargin) {
      return `
        margin: 0 0 1rem 0;
      `;
    }
  }}
`;

const StyledPhoneFax = styled.p`
  margin: 0 0 0 0;
  text-align: left;
  ${props => {
    if (props.white) {
      return `
        color: #FFF;
      `;
    }
  }}
`;

class PhoneFax extends Component {

  render() {
    const white = this.props.white;
    const bottomMargin = this.props.bottomMargin;

    return (
      <StyledPhoneFaxContainer bottomMargin = { bottomMargin }>
        <StyledPhoneFax white={ white }>Phone: (630) 620-7300</StyledPhoneFax>
        <StyledPhoneFax white={ white }>Fax: (630) 620-7352</StyledPhoneFax>
      </StyledPhoneFaxContainer>
    );
  }

}

export default PhoneFax;
