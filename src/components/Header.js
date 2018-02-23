import React, { Component } from 'react';
import styled, { css } from 'styled-components';
import { media } from '../media.js';
import Address from './Address.js';
import logo from '../images/logo.svg';
import { Link } from 'react-router-dom'

const HeaderContainer = styled.div`
  max-width: 1440px;
  margin: auto;
  display: flex;
  align-items: center;
  padding: 0 1rem;

  ${media.tablet`
    display: inline-block;
    text-align: center;
    margin: 2rem 0 2rem 0;
  `}
`;

const StyledHeaderImg = styled.img`
  display: block;
  max-width: 176px;
  height: auto;
  margin: auto;


  ${media.phone`
    margin: 2rem 0 1rem 0;
  `}
`;

const Filler = styled.div`
  flex-grow: 1;

  ${media.tablet`
    flex-grow: 0;
  `}
`;

const HeaderBottomNavList = styled.ul`
  flex-grow: 0;
  padding: 0;
  list-style: none;
  display: flex;
  flex-wrap: wrap;

  ${media.phone`
    display: inline-block;
  `}
`;

const HeaderBottomLink = styled(Link)`
  text-decoration: none;
`;

const HeaderBottomNavItem = styled.li`
  color: #333;
  padding: 1rem 1rem 1rem 1rem;
  transition: all 150ms ease;
  text-decoration: none;

  &:hover {
    color: #2A6BB4;
  }
`;

const StyledHeaderContactInfo = styled.div`
min-width: 160px;
  flex-grow: 0;
  margin: .5rem 0 .5rem 1rem;

  ${media.phone`
    margin: 1rem 0 1rem 0;
  `}
`;

const PhoneNumber = styled.p`
  font-size: 120%;
  margin: 0 0 0 0;
  color: #58A6FF;
  text-align: center;
`;

class Header extends Component {

  render() {
    return (
      <HeaderContainer>
        <Link to="/">
          <StyledHeaderImg src={logo} className="logo" alt="logo" />
        </Link>
        <Filler></Filler>
        <HeaderBottomNavList>
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
        </HeaderBottomNavList>
        <StyledHeaderContactInfo>
          <PhoneNumber>Call: (630) 620-7300</PhoneNumber>
          <Address isHeader/>
        </StyledHeaderContactInfo>
      </HeaderContainer>
    );
  }

}

export default Header;
