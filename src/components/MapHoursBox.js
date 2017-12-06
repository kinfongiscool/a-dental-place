import React, { Component } from 'react';
import styled from 'styled-components';

const MapHoursBoxContainer = styled.div`
  margin: 0 0 0 0;
  background-color: #EBF4FF;
  flex: 1;
  padding: 2rem;
  z-index: 10;
  position: relative;
  bottom: 2rem;
  transition: transform 150ms ease-in-out;
  transform: ${props => props.mapHasCursor ? 'translate(0, 2rem)' : ''};
  text-align: left;
`;

const MapHoursTable = styled.div`
  display: table;
  table-layout: fixed;
  margin: auto;
`;

const MapHoursTableCell = styled.div`
  display: table-cell;
  padding: 0;
  margin: 1rem;
  float: ${props => props.left ? 'left' : 'right'};

`;

const StyledHoursUl = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
  text-align: ${props => props.left ? 'right' : 'left'};
  float: ${props => props.left ? 'left' : 'right'};

`;

class MapHoursBox extends Component {

  render() {
    return (
      <MapHoursBoxContainer mapHasCursor={ this.props.mapHasCursor }>
        <span>Hours:</span>
        <MapHoursTable>
          <MapHoursTableCell left>
            <StyledHoursUl left>
              <li>Tuesday</li>
              <li>Wednesday</li>
              <li>Thursday</li>
              <li>Friday</li>
            </StyledHoursUl>
          </MapHoursTableCell>
          <MapHoursTableCell>
            <StyledHoursUl>
              <li>7am - 3pm</li>
              <li>10am - 7pm</li>
              <li>10am - 7pm</li>
              <li>7am - 3pm</li>
            </StyledHoursUl>
          </MapHoursTableCell>
        </MapHoursTable>
      </MapHoursBoxContainer>
    );
  }

}

export default MapHoursBox;
