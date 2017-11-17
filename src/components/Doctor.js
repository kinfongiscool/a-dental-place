import React, { Component } from 'react';
import styled, { css } from 'styled-components';

const DoctorContainer = styled.div`
  display: flex;
  flex-direction: ${props => props.imageLeft ? 'row' : 'row-reverse'};
  margin: ${props => props.imageLeft ? '0 0 2rem 0' : '2rem 0 0 0'};
`;

const DoctorImage = styled.img`
  padding: 1rem;
  z-index: 10;
  align-self: ${props => props.imageLeft ? 'flex-start' : 'flex-end'};
  background: #58A6FF;
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
  padding: ${props => props.imageLeft ? '.5rem 1.5rem .5rem 4.5rem' : '.5rem 4.5rem .5rem 1.5rem'};
  margin: ${props => props.imageLeft ? '0 -2rem 2rem 0' : '1rem 0 0 -2rem'};
`;

const DoctorName = styled.h3`
  text-align: left;
`;

const DoctorDescription = styled.p`
  text-align: left;
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
