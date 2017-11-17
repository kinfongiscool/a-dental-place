import React, { Component } from 'react';
import styled, { css } from 'styled-components';

const DoctorsHeaderText = styled.h1`

`;

class DoctorsHeader extends Component {

  render() {
    return (
      <div>
        <DoctorsHeaderText>Meet the Doctors</DoctorsHeaderText>
      </div>
    );
  }

}

export default DoctorsHeader;
