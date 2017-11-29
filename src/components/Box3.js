import React, { Component } from 'react';
import styled, { css } from 'styled-components';

const StyledBox3 = styled.div`
  width: 100%;
  height: 4rem;
  background-color: wheat;
`;

class Box3 extends Component {

  render() {
    return (
      <div>
      <StyledBox3/>
      </div>
    );
  }

}

export default Box3;
