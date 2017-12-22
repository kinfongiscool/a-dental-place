import React, { Component } from 'react';
import styled, { css } from 'styled-components';
import TeamMember from '../components/TeamMember.js';
import SectionTitle from '../components/SectionTitle.js'
import danFong from '../images/dan-fong.png';
import robinCastro from '../images/robin-castro.png';
import FooterContainer from './FooterContainer.js';

const Container = styled.div`
  max-width: 1024px;
  margin: auto auto 2rem auto;
`;

class MeetTheTeam extends Component {

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
        imageLeft={ true } />,
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
        imageLeft={ false } />
    ]
    const hygienists = [
      <TeamMember
        key="Hygienist 1"
        name="Hygienist 1"
        description={
          [
            "A dental hygienist or oral hygienist is a licensed dental professional, registered with a dental association, or regulatory body within their country of practice.",
            "They are primary healthcare professionals who work independently of or alongside dentists and other dental professionals to provide full oral health care.",
            "They have the training and education that focus on and specialize in the prevention and treatment of many oral disease."
          ]
        }
        image={ danFong }
        imageLeft={ true } />,
      <TeamMember
        key="Hygienist 2"
        name="Hygienist 2"
        description={
          [
            "The dental hygienist is a primary resource for oral cancer screening and prevention.",
            "Most importantly, they spend a large amount of time at each patient visit looking at the soft tissues of the oral cavity, where the early manifestations of oral cancer occur.",
            "They can choose to work in a range of dental settings from independent practice, private practice, and specialist practice to the public sector, and they can also work in residential aged care facilities"
          ]
        }
        image={ robinCastro }
        imageLeft={ false } />
    ]

    const assistants = [
      <TeamMember
        key="Assisstant 1"
        name="Assisstant 1"
        description={
          [
            "A dental assistant or oral assistant is a licensed dental professional, registered with a dental association, or regulatory body within their country of practice.",
            "They are primary healthcare professionals who work independently of or alongside dentists and other dental professionals to provide full oral health care.",
            "They have the training and education that focus on and specialize in the prevention and treatment of many oral disease."
          ]
        }
        image={ danFong }
        imageLeft={ true } />,
      <TeamMember
        key="Assisstant 2"
        name="Assisstant 2"
        description={
          [
            "The dental assistant is a primary resource for oral cancer screening and prevention.",
            "Most importantly, they spend a large amount of time at each patient visit looking at the soft tissues of the oral cavity, where the early manifestations of oral cancer occur.",
            "They can choose to work in a range of dental settings from independent practice, private practice, and specialist practice to the public sector, and they can also work in residential aged care facilities"
          ]
        }
        image={ robinCastro }
        imageLeft={ false } />
    ]

    const stacy = [
      <TeamMember
        key="Stacy"
        name="Stacy"
        description={
          [
            "This is Stacy."
          ]
        }
        image={ danFong }
        imageLeft={ true } />
    ]

    return (
      <div>
        <Container>
          <SectionTitle colored={ false } text={ "Meet the Doctors" }/>
          { doctors }
          <SectionTitle colored={ false } text={ "Meet the Hygienists" }/>
          { hygienists }
          <SectionTitle colored={ false } text={ "Meet the Assisstants" }/>
          { assistants }
          <SectionTitle colored={ false } text={ "Meet Stacy" }/>
          { stacy }
        </Container>
        <FooterContainer />
      </div>
    );
  }

}

export default MeetTheTeam;
