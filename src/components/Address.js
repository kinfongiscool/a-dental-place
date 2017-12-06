import React, { Component } from 'react';
import styled, { css } from 'styled-components';
import PropTypes from 'prop-types';

const AddressLine = styled.p`
  margin: 0 0 0 0;
  color: #FFF;
  text-align: left;
  padding: 0;

  ${props => props.isHeader && css`
    color: #4A4A4A;
    text-align: right;
  `}
`;

class Address extends Component {

  render() {
    var isHeader = this.props.isHeader;
    return (
      <AddressLine isHeader={isHeader}>845 S Main St Suite 202<br />Lombard, IL 60148</AddressLine>
    );
  }

}

export default Address;
