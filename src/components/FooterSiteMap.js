import React, { Component } from 'react';
import styled from 'styled-components';

const StyledFooterSiteMap = styled.div`
  flex: 1;
`;

const StyledFooterUL = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
  text-align: left;
`;

const StyledFooterLi = styled.li`
  margin: 0 0 1rem 0;
`;

const StyledFooterA = styled.a`
  color: #fff;
  text-decoration: none;
`;

class FooterSiteMap extends Component {

  render() {
    return (
      <StyledFooterSiteMap>
        <StyledFooterUL>
          <StyledFooterLi>
            <StyledFooterA href="">Home</StyledFooterA>
          </StyledFooterLi>
          <StyledFooterLi>
            <StyledFooterA href="">Meet the Team</StyledFooterA>
          </StyledFooterLi>
          <StyledFooterLi>
            <StyledFooterA href="">Services</StyledFooterA>
          </StyledFooterLi>
          <StyledFooterLi>
            <StyledFooterA href="">New Patients</StyledFooterA>
          </StyledFooterLi>
          <StyledFooterLi>
            <StyledFooterA href="">Contact</StyledFooterA>
          </StyledFooterLi>
          <StyledFooterLi>
            <StyledFooterA href="">Testimonials</StyledFooterA>
          </StyledFooterLi>
        </StyledFooterUL>
      </StyledFooterSiteMap>
    );
  }

}

export default FooterSiteMap;
