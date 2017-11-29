import React, { Component } from 'react';
import styled from 'styled-components';

const StyledPhoneFax = styled.p`
  ${props => {
    if (props.footer) {
      return `
        margin: 0 0 0 0;
        color: #FFF;
        text-align: left;
      `;
    }
  }}
`;

class PhoneFax extends Component {

  render() {
    const footer = this.props.footer;

    return (
      <div>
        <StyledPhoneFax footer={ footer }>Phone: (630) 620-7300</StyledPhoneFax>
        <StyledPhoneFax footer={ footer }>Fax: (630) 620-7352</StyledPhoneFax>
      </div>
    );
  }

}

export default PhoneFax;
