import React, { Component } from 'react';
import styled, { css } from 'styled-components';
import { media } from '../media.js';

const HeaderBottomContainer = styled.div`
  background: #58A6FF;
`;

const HeaderBottomNavList = styled.ul`
  padding: 0;
  margin: 0;
  list-style: none;
  display: flex;
  justify-content: center;

  ${media.phone`
    display: inline-block;
  `}
`;

const HeaderBottomNavItem = styled.li`
  color: #FDFEFF;
  padding: 1rem 1.5rem 1rem 1.5rem;
  transition: all 150ms ease;
  
  &:hover {
    color: #58A6FF;
    background: #FDFEFF;
  }
`;

class HeaderBottom extends Component {

  render() {
    return (
      <HeaderBottomContainer>
        <HeaderBottomNavList>
          <HeaderBottomNavItem><a src="#meet-the-team">Meet the Team</a></HeaderBottomNavItem>
          <HeaderBottomNavItem><a src="#services">Services</a></HeaderBottomNavItem>
          <HeaderBottomNavItem><a src="#new-patients">New Patients</a></HeaderBottomNavItem>
          <HeaderBottomNavItem><a src="#faqs">FAQs</a></HeaderBottomNavItem>
          <HeaderBottomNavItem><a src="#Contact">Contact</a></HeaderBottomNavItem>
          <HeaderBottomNavItem><a src="#Testimonials">Testimonials</a></HeaderBottomNavItem>
        </HeaderBottomNavList>
      </HeaderBottomContainer>
    );
  }

}

export default HeaderBottom;
