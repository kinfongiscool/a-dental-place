import React, { Component } from 'react';
import styled, { css } from 'styled-components';
import SectionTitle from '../components/SectionTitle.js'
import DentalService from '../components/DentalService.js'
import restorativeDentistry from '../images/restorative-dentistry.svg'
import generalCare from '../images/general-care.svg'
import cosmeticTreatments from '../images/cosmetic-treatments.svg'

const Container = styled.div`
  background-color: #EBF4FF;
  padding: 1px 0 1rem 0;

`;

const DentalServicesFlexContainer = styled.div`
  display: flex;
  justify-content: space-between;
  max-width: 768px;
  margin: auto auto 2rem auto;
`;

class DentalServicesContainer extends Component {

  render() {
    const dentalServices = [
      <DentalService
        key="Restorative Dentistry"
        name="Restorative Dentistry"
        image={ restorativeDentistry }
        url=""
      />,
      <DentalService
        key="General Care"
        name="General Care"
        image={ generalCare }
        url=""
      />,
      <DentalService
        key="Cosmetic Treatments"
        name="Cosmetic Treatments"
        image={ cosmeticTreatments }
        url=""
      />
    ]

    return (
      <Container>
        <SectionTitle colored={ true } text={ "Services" }/>
        <DentalServicesFlexContainer>
          { dentalServices }
        </DentalServicesFlexContainer>
      </Container>
    );
  }

}

export default DentalServicesContainer;
