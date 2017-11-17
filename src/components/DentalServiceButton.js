import React, { Component } from 'react';
import styled, { css } from 'styled-components';

const Button = styled.div`
  background: white;
	margin: 1em;
	padding: .5rem 2rem;
	border-radius: 3px;
  &:hover {
    background: #ACD3FF;
  }
  font-weight: bold;
`;

class DentalServiceButton extends Component {

  render() {
    return (
      <Button>{ this.props.text }</Button>
    );
  }

}

export default DentalServiceButton;
