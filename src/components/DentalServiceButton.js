import React, { Component } from 'react';
import styled, { css } from 'styled-components';

const Button = styled.div`
  background: ${props => props.hasCursor ? '#ACD3FF;' : 'white'};
	margin: 1em;
	padding: .5rem 2rem;
	border-radius: 3px;
  font-weight: bold;
`;

class DentalServiceButton extends Component {

  render() {

    var hasCursor = this.props.hasCursor;

    return (
      <Button hasCursor={ hasCursor }>{ this.props.text }</Button>
    );
  }

}

export default DentalServiceButton;
