import React, { Component } from 'react';
import styled from 'styled-components';

const StyledCopyrightP = styled.p`
  text-align: ${props => props.right ? 'right' : 'left'};
  color: #fff;
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
