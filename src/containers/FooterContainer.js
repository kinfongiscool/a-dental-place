import React, { Component } from 'react';
import styled from 'styled-components';
import FooterContactInfo from '../components/FooterContactInfo.js';
import FooterSiteMap from '../components/FooterSiteMap.js';
import Copyright from '../components/Copyright.js';

const MainContainer = styled.div`
  background: #092E58;
`;

const StyledFooterContainer = styled.div`
  max-width: 1024px;
  margin: auto;
  padding: 4rem 2rem 1rem 2rem;
`;

const FooterContentContainer = styled.div`
  display: flex;
  margin: auto;
`;

class FooterContainer extends Component {

  render() {
    return (
      <MainContainer>
        <StyledFooterContainer>
          <FooterContentContainer>
            <FooterContactInfo />
            <FooterSiteMap />
          </FooterContentContainer>
          <Copyright right/>
        </StyledFooterContainer>
      </MainContainer>
    );
  }

}

export default FooterContainer;
