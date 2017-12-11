import React, { Component } from 'react';
import styled, { css } from 'styled-components';
import { media } from '../media.js';

const DoctorContainer = styled.div`
  display: flex;
  flex-direction: ${props => props.imageLeft ? 'row' : 'row-reverse'};
  margin: ${props => props.imageLeft ? '0 0 2rem 0' : '2rem 0 0 0'};

  ${media.phone`
    display: inline-block;
    margin: 0;
  `}
`;

const DoctorImage = styled.img`
  padding: 1rem;
  z-index: 10;
  align-self: ${props => props.imageLeft ? 'flex-start' : 'flex-end'};
  background: #58A6FF;

  ${media.phone`
    align-self: center;
  `}
`;

const DoctorTextContainer = styled.div`
  height: 100%;
  position: relative;
  top: ${props => props.imageLeft ? '2rem' : ''};
  right: ${props => props.imageLeft ? '3rem' : ''};
  bottom: ${props => props.imageLeft ? '' : '1rem'};
  left: ${props => props.imageLeft ? '' : '3rem'};
  background-color: #EBF4FF;
  align-items: left;
  padding: ${props => props.imageLeft ? '1rem 2rem 1rem 5rem' : '1rem 5rem 1rem 2rem'};
  margin: ${props => props.imageLeft ? '0 -2rem 2rem 0' : '1rem 0 0 -2rem'};

  ${media.phone`
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    padding: 2rem;
    margin: 1rem 2rem 2rem 2rem;
  `}
`;

const DoctorName = styled.h3`
  text-align: left;

  ${media.phone`
    margin: 0 0 1rem 0;
  `}
`;

const DoctorDescription = styled.p`
  text-align: left;

  ${media.phone`
    margin: 0;
  `}
`;

class Doctor extends Component {

  render() {
    return (
      <DoctorContainer imageLeft={ this.props.imageLeft } key={ this.props.key } >
        <DoctorImage imageLeft={ this.props.imageLeft } src={ this.props.image } alt={ this.props.name } />
        <DoctorTextContainer imageLeft={ this.props.imageLeft }>
          <DoctorName>{ this.props.name }</DoctorName>
          <DoctorDescription>{ this.props.description }</DoctorDescription>
        </DoctorTextContainer>
      </DoctorContainer>
    );
  }

}

export default Doctor;
