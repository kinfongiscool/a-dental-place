import React, { Component } from 'react';
import styled, { css } from 'styled-components';
import { media } from '../media.js';
import DentalServiceButton from './DentalServiceButton.js'
import { Link } from 'react-router-dom'

const ServicesLink = styled(Link)`
  text-decoration: none;
  color: #333;
`;

const StyledDentalService = styled.div`
  ${media.tablet`
    margin-bottom: 2rem;
  `}
`;

const StyledDentalServiceButton = styled(DentalServiceButton)`
  ${StyledDentalService}:hover & {
      background: #ACD3FF;
  }
`;

class DentalService extends Component {

  constructor(props) {
    super(props);

    this.state = {
        hasCursor: false
    }

    this.mouseEnter = this.mouseEnter.bind(this);
    this.mouseLeave = this.mouseLeave.bind(this);
  }

  mouseEnter() {
    this.setState({ hasCursor : true });
  }

  mouseLeave() {
    this.setState({ hasCursor : false });
  }

  render() {
    return (
      <ServicesLink to="/services">
        <StyledDentalService
          onMouseEnter={ this.mouseEnter }
          onMouseLeave={ this.mouseLeave } >
          <img src={ this.props.image } alt={ this.props.name } />
          <StyledDentalServiceButton hasCursor={ this.state.hasCursor } url={ this.props.url } text={ this.props.name } />
        </StyledDentalService>
      </ServicesLink>
    );
  }

}

export default DentalService;
