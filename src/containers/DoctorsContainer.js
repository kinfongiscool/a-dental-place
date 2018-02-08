import React, { Component } from 'react';
import styled, { css } from 'styled-components';
import TeamMember from '../components/TeamMember.js';
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
      <TeamMember
        key="Dr. Dan Fong"
        name="Dr. Dan Fong, DDS"
        description={
          [
            "Dr. Fong received his Doctor of Dental Science from the University of Illinois in 1987. He has extensive continuing education in Cosmetic and restorative Dentistry, root canal therapy and Orthodontics.",
            "He established his dental practice in Lombard, Illinois in 1988, where he continues to provide family dental care and orthodontics."
          ]
        }
        image={ danFong }
        imageLeft={ true }
        clickable={ true } />,
      <TeamMember
        key="Dr. Robin Castro"
        name="Dr. Robin Castro, DMD"
        description={
          [
            "Is the new guy.",
            "Is not a butt, unlike Dr. Fong",
            "BLAH BLAH BLAHB ALBH aaa aaa aaaaaa aaaa aaa aaaa aaaaa aa aaaaaa aaaaa aaaa aaaa aaa aaaa"
          ]
        }
        image={ robinCastro }
        imageLeft={ false }
        clickable={ true } />
    ]

    return (
      <Container>
        <SectionTitle colored={ false } text={ "Meet the Doctors" }/>
        { doctors }
      </Container>
    );
  }

}

export default MeetTheDoctorsContainer;
