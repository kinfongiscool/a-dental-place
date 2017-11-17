import React, { Component } from 'react';
import styled, { css } from 'styled-components';
import DentalServiceButton from './DentalServiceButton.js'

class DentalService extends Component {

  render() {
    return (
      <div>
        <img src={ this.props.image } alt={ this.props.name } />
        <DentalServiceButton url={ this.props.url } text={ this.props.name } />
      </div>
    );
  }

}

export default DentalService;
