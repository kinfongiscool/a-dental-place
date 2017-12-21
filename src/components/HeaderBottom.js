import React, { Component } from 'react';
import styled, { css } from 'styled-components';
import { media } from '../media.js';
import { Link } from 'react-router-dom'

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

const HeaderBottomLink = styled(Link)`
  text-decoration: none;
`;

const HeaderBottomNavItem = styled.li`
  color: #FDFEFF;
  padding: 1rem 1.5rem 1rem 1.5rem;
  transition: all 150ms ease;
  text-decoration: none;

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
          <HeaderBottomLink to="/">
            <HeaderBottomNavItem>
              <span>Home</span>
            </HeaderBottomNavItem>
          </HeaderBottomLink>
          <HeaderBottomLink to="/meet-the-team">
            <HeaderBottomNavItem>
              <span>Meet the Team</span>
            </HeaderBottomNavItem>
          </HeaderBottomLink>
          <HeaderBottomLink to="/services">
            <HeaderBottomNavItem>
              <span>Services</span>
            </HeaderBottomNavItem>
          </HeaderBottomLink>
          <HeaderBottomLink to="/new-patients">
            <HeaderBottomNavItem>
              <span>New Patients</span>
            </HeaderBottomNavItem>
          </HeaderBottomLink>
          <HeaderBottomLink to="/faqs">
            <HeaderBottomNavItem>
              <span>FAQs</span>
            </HeaderBottomNavItem>
          </HeaderBottomLink>
          <HeaderBottomLink to="/contact">
            <HeaderBottomNavItem>
              <span>Contact</span>
            </HeaderBottomNavItem>
          </HeaderBottomLink>
          <HeaderBottomLink to="/Testimonials">
            <HeaderBottomNavItem>
              <span>Testimonials</span>
            </HeaderBottomNavItem>
          </HeaderBottomLink>
        </HeaderBottomNavList>
      </HeaderBottomContainer>
    );
  }

}

export default HeaderBottom;
