import React, { Component } from 'react';
import styled from 'styled-components';

const StyledHoursUlContainer = styled.div`
width: 100%;
display: flex;
margin: 0;
`;

const StyledHoursUl = styled.ul`
  flex: ${props => props.left ? '1' : '2'};
  list-style: none;
  margin: 0;
  padding: 0;
  margin: auto;
  text-align: left;
  color: white;
`;

class HoursUl extends Component {

  render() {
    return (
      <StyledHoursUlContainer>
        <StyledHoursUl left>
          <li>Tuesday</li>
          <li>Wednesday</li>
          <li>Thursday</li>
          <li>Friday</li>
        </StyledHoursUl>
        <StyledHoursUl>
          <li>7am - 3pm</li>
          <li>10am - 7pm</li>
          <li>10am - 7pm</li>
          <li>7am - 3pm</li>
        </StyledHoursUl>
      </StyledHoursUlContainer>
    );
  }

}

export default HoursUl;
