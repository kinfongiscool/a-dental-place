import React, { Component } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom'

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

const StyledFooterLink = styled(Link)`
  text-decoration: none;
  color: #FDFEFF;
  text-decoration: none;
  transition: all 150ms ease;

  &:hover {
  color: #58A6FF;
`;

class FooterSiteMap extends Component {

  render() {
    return (
      <StyledFooterSiteMap>
        <StyledFooterUL>
          <StyledFooterLi>
            <StyledFooterLink to="/">Home</StyledFooterLink>
          </StyledFooterLi>
          <StyledFooterLi>
            <StyledFooterLink to="/meet-the-team">Meet the Team</StyledFooterLink>
          </StyledFooterLi>
          <StyledFooterLi>
            <StyledFooterLink to="/services">Services</StyledFooterLink>
          </StyledFooterLi>
          <StyledFooterLi>
            <StyledFooterLink to="/new-patients">New Patients</StyledFooterLink>
          </StyledFooterLi>
          <StyledFooterLi>
            <StyledFooterLink to="/contact">Contact</StyledFooterLink>
          </StyledFooterLi>
          <StyledFooterLi>
            <StyledFooterLink to="/testimonials">Testimonials</StyledFooterLink>
          </StyledFooterLi>
        </StyledFooterUL>
      </StyledFooterSiteMap>
    );
  }

}

export default FooterSiteMap;
