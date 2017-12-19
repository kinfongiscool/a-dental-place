import React, { Component } from 'react';
import styled from 'styled-components';

const CarouselCaptionContainerContainer = styled.div`
  max-width: 1024px;
  margin: auto;
`;

const CarouselCaptionContainer = styled.div`
  max-width: 1024px;
  padding: auto 2rem 1rem 2rem;
  margin: 0 2rem -2rem 2rem;
  z-index: 10;
  position: relative;
  bottom: 2rem;
  background-color: #EBF4FF;
`;

const CarouselCaptionTitle = styled.h1`
  padding: 2rem 2rem 0 2rem;
  margin: 0;
  text-align: left;
`;

const CarouselCaptionSubTitle = styled.h3`
  padding: 0rem 2rem 0 2rem;
  margin: 0;
  text-align: left;
`;

const CarouselCaptionText = styled.p`
  padding: 1rem 2rem 2rem 2rem;
  margin: 0;
  text-align: left;
  text-justifyl: left;
  line-height: 160%;
`;

class CarouselCaption extends Component {

  render() {
    return (
      <CarouselCaptionContainerContainer>
        <CarouselCaptionContainer>
          <CarouselCaptionTitle>Welcome to our practice!</CarouselCaptionTitle>
          <CarouselCaptionSubTitle>A Dental Place, ltd. Located in Lombard, IL.</CarouselCaptionSubTitle>
          <CarouselCaptionText>A Dental Place is here to beautify your smile and to maintain your dental health. Established in 1988, our mission has always been to provide the highest quality care in a gentle, comfortable environment. We strive to build genuine relationships with our patients and take pride when those relationship span multiple generations. Our practice is more than a dental office, it’s a family, and we can’t wait for you to be a part of it.</CarouselCaptionText>
        </CarouselCaptionContainer>
      </CarouselCaptionContainerContainer>
    );
  }

}

export default CarouselCaption;
