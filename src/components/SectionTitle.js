import React, { Component } from 'react';
import styled, { css } from 'styled-components';

const SectionTitleText = styled.h1`
  color: ${props => props.colored ? '#58A6FF' : '#4A4A4A'};

`;

class SectionTitle extends Component {

  render() {
    return (
      <div>
        <SectionTitleText colored={ this.props.colored }>Meet the Doctors</SectionTitleText>
      </div>
    );
  }

}

export default SectionTitle;
