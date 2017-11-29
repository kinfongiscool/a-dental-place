import React, { Component } from 'react';
import styled from 'styled-components';

const FooterHoursBoxContainer = styled.div`
  display: flex;
  margin: 0 0 0 1rem;
  justify-content: space-around;
  background-color: #EBF4FF;
  flex: 1;
  padding: 2rem;
  z-index: 10;
  position: relative;
  bottom: 2rem;
`;

const StyledHoursUl = styled.ul`
  padding: 0;
  list-style: none;
  margin: 0;
`;

class FooterHoursBox extends Component {

  render() {
    return (
      <FooterHoursBoxContainer>
        <span>Hours</span>
        <StyledHoursUl>
          <li>Tuesday</li>
          <li>Wednesday</li>
          <li>Thursday</li>
          <li>Friday</li>
        </StyledHoursUl>
        <StyledHoursUl>
          <li>7:00am - 3:00pm</li>
          <li>10:00am - 7:00pm</li>
          <li>10:00am - 7:00pm</li>
          <li>7:00am - 3:00pm</li>
        </StyledHoursUl>
      </FooterHoursBoxContainer>
    );
  }

}

export default FooterHoursBox;
