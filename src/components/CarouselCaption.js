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
`;

class CarouselCaption extends Component {

  render() {
    return (
      <CarouselCaptionContainerContainer>
        <CarouselCaptionContainer>
          <CarouselCaptionTitle>Welcome to our practice!</CarouselCaptionTitle>
          <CarouselCaptionSubTitle>A Dental Place, ltd. Located in Lombard, IL.</CarouselCaptionSubTitle>
          <CarouselCaptionText>Established in 1988, A Dental Place specializes in beautifying smiles, maintaining your dental health, and helping you improve your appearance. Our experienced and friendly staff takes great pride in keeping your smile beautiful. Our promise to you is that the veneers, fillings, crowns, and bridges we create will look as good as or better than the teeth nature gave you. And to make sure we keep that promise, the products we recommend and use are the highest quality and incredibly durable.</CarouselCaptionText>
        </CarouselCaptionContainer>
      </CarouselCaptionContainerContainer>
    );
  }

}

export default CarouselCaption;
