import React, { Component } from 'react';
import styled from 'styled-components';
import { media } from '../media.js';

const StyledCopyrightP = styled.p`
  text-align: ${props => props.right ? 'right' : 'left'};
  color: #FDFEFF;

  ${media.phone`
    padding: 2rem 0 0 0;
    text-align: center;
  `}
`;

class Copyright extends Component {

  render() {
    return (
      <div>
        <StyledCopyrightP right={ this.props.right }>&#169; A Dental Place, Ltd.</StyledCopyrightP>
      </div>
    );
  }

}

export default Copyright;
