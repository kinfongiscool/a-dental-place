import React, { Component } from 'react';
import styled, { css } from 'styled-components';
import Doctor from '../components/Doctor.js';
import SectionTitle from '../components/SectionTitle.js'
import danFong from '../images/dan-fong.png';
import robinCastro from '../images/robin-castro.png';

const Container = styled.div`
  max-width: 768px;
  margin: auto auto 2rem auto;
`;

class MeetTheDoctorsContainer extends Component {

  render() {
    const doctors = [
      <Doctor
        key="Dr. Dan Fong"
        name="Dr. Dan Fong, DDS"
        description="He is a butt. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Blah blah  blah blah blah blah blah Blah blah  blah blah blah blah blah"
        image={danFong}
        imageLeft={true} />,
      <Doctor
        key="Dr. Robin Castro"
        name="Dr. Robin Castro, DMD"
        description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident."
        image={robinCastro}
        imageLeft={false} />
    ]

    return (
      <Container>
        <SectionTitle colored={false}/>
        { doctors }
      </Container>
    );
  }

}

export default MeetTheDoctorsContainer;
