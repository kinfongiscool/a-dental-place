import React, { Component } from 'react';
import styled from 'styled-components';
import FooterAddressBox from '../components/FooterAddressBox.js';
import FooterHoursBox from '../components/FooterHoursBox.js';

const FooterBoxContainer = styled.div`
  display: flex;
  align-items: stretch;
  justify-content: center;
  background-color: #2A6BB4;
  padding: 0 2rem 0 2rem;
`;

class FooterContainer extends Component {

  render() {

    return (
      <FooterBoxContainer mapHasCursor={ this.props.mapHasCursor }>
        <FooterAddressBox mapHasCursor={ this.props.mapHasCursor }/>
        <FooterHoursBox mapHasCursor={ this.props.mapHasCursor }/>
      </FooterBoxContainer>
    );
  }

}

export default FooterContainer;
