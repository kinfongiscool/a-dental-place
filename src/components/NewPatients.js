import React, { Component } from 'react';
import styled from 'styled-components';
import NewPatientRegistrationForm from '../files/NEW_PATIENT_REGISTRATION.pdf';
import AdultDentalHistory from '../files/ADULT_DENTAL_HISTORY.pdf';
import AdultMedicalHistory from '../files/ADULT_MEDICAL_HISTORY.pdf';
import ChildrensMedicalDentalHistory from '../files/CHILDRENS_MEDICAL_DENTAL_HISTORY.pdf';
import FinancialPolicyAndOfficeGuidelines from '../files/FINANCIAL_POLICY_AND_OFFICE_GUIDELINES.pdf';

const Container = styled.div`
  max-width: 1024px;
  margin: 2rem auto 2rem auto;
`;

const NewPatientsDownloadItemContainer = styled.div`+
  margin: auto;
  display: flex;
  justify-content: space-bewteeen;
`;

const NewPatientsDownloadItem = styled.div`
  margin: 1rem auto 1rem auto;
  padding: 2rem;
  background-color: #EBF4FF;
`;

class NewPatients extends Component {

  render() {
    return (
      <Container>
        <p>Below are the forms you will need to complete and bring with you on your first visit with us.</p>
        <p>All new patients will need the following forms: new patient registration, medical and dental forms, and financial policy form.</p>
        <p>Additionally, please bring your most current dental insurance card and photo id.</p>
        <NewPatientsDownloadItemContainer>
          <NewPatientsDownloadItem>
            <a href={ NewPatientRegistrationForm } download>New Patient Registration</a>
          </NewPatientsDownloadItem>
          <NewPatientsDownloadItem>
            <a href={ AdultDentalHistory } download>Adult Dental</a>
            <span> & </span>
            <a href={ AdultMedicalHistory } download>Adult Medical</a>
            <p>or</p>
            <a href={ ChildrensMedicalDentalHistory } download>Children Dental/Medical</a>
          </NewPatientsDownloadItem>
          <NewPatientsDownloadItem>
            <a href={ FinancialPolicyAndOfficeGuidelines } download>Financial Policy and Office Guidelines</a>
          </NewPatientsDownloadItem>
        </NewPatientsDownloadItemContainer>
      </Container>
    );
  }

}

export default NewPatients;
