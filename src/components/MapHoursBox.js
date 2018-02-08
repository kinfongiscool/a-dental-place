import React, { Component } from 'react';
import styled from 'styled-components';
import { media } from '../media.js';
import PhoneFax from './PhoneFax.js';

const MapHoursBoxContainer = styled.div`
  margin: auto auto auto 1rem;
  background-color: #EBF4FF;
  flex: 1;
  padding: 2rem;
  z-index: 10;
  position: relative;
  bottom: 3rem;
  transition: transform 150ms ease-in-out;
  transform: ${props => props.mapHasCursor ? 'translate(0, 3rem)' : ''};

  ${media.tablet`
    bottom: 0;
    transform: none;
  `}

  ${media.phone`
    margin: auto 1rem auto 1rem;
  `}
`;

const MapHoursContentContainer = styled.div`
  display: flex;
  text-align: left;

  ${media.tablet`
    display: inline;
  `}

  ${media.phone`
    display: flex;
  `}

  ${media.tiny`
    display: inline;
  `}
`;

const MapHoursSpan = styled.p`
  flex: 1;

  margin-top: 0;

  ${media.tablet`
    margin-top: 1rem;
  `}

  ${media.phone`
    margin-top: 0;
  `}

  ${media.tiny`
    margin-top: 1rem;
  `}
`;

const MapHoursHoursContainer = styled.div`
  display: flex;
  flex: 2;
  justify-content: space-between;
  text-align: left;
`;

const StyledHoursUl = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
  text-align: left;
`;

class MapHoursBox extends Component {

  render() {
    return (
      <MapHoursBoxContainer mapHasCursor={ this.props.mapHasCursor }>
        <PhoneFax bottomMargin={ true }/>
        <MapHoursContentContainer>
          <MapHoursSpan>Hours:</MapHoursSpan>
          <MapHoursHoursContainer>
            <StyledHoursUl>
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
          </MapHoursHoursContainer>
        </MapHoursContentContainer>
      </MapHoursBoxContainer>
    );
  }

}

export default MapHoursBox;
