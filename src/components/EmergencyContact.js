import React, { Component } from 'react';
import styled from 'styled-components';

const Styledp = styled.p`
  color: #FDFEFF;
  font-style: italic;
`;

class EmergencyContact extends Component {

  render() {
    return (
      <div>
        <Styledp>After Hours Emergency - Call or Text: (630) 708-0806</Styledp>
      </div>
    );
  }

}

export default EmergencyContact;
