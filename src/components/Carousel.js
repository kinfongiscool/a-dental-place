import React, { Component } from 'react';
import styled, { css } from 'styled-components';
import Carousel from 'nuka-carousel';

import banner from '../images/banner v2.svg';
import fakeOffice from '../images/dentoffice.jpg';
import fakeFamily from '../images/family-outdoor-happy-happiness-160994.jpeg';

const StyledH1 = styled.h1`
  font-size: 2.5em;
  color: #FDFEFF;
  font-family: 'Ubuntu', sans-serif;
  font-weight: 300;
  letter-spacing: 1px;
`;

const StyledH2 = styled.h2`
  font-size: 2.2em;
  color: #FDFEFF;
  font-family: 'Ubuntu', sans-serif;
  font-weight: 300;
  letter-spacing: 1px;
`;

const TextWrapper = styled.div`
  padding: 0;
  margin: auto;
  height: 400px;
  width: auto;
  position: absolute;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

const SlideContentsContainer = styled.div`
  height: 400px;
  overflow: hidden;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const SlideImg = styled.img`
flex-shrink: 0;
min-width: 100%;
min-height: 100%

  overflow: hidden;
`;

const Slide = styled.div`
  width: auto;
  height: 400px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const CarouselContainer = styled.div`
  display: flex;
  align-items: center;
`;

var createReactClass = require('create-react-class');

var Decorators = [{
  component: createReactClass({
    render() {
      return (
        <div>
        </div>
      )
    }
  }),
  position: 'CenterLeft',
  style: {
    padding: 20
  }
}];

class AdpCarousel extends Component {
  render() {
    return (
      <CarouselContainer>
        <Carousel autoplay={true} autoplayInterval={8000} speed={1000} wrapAround={true} decorators={Decorators}>
          <Slide>
            <SlideContentsContainer>
              <SlideImg src={ banner } />
            </SlideContentsContainer>
            <TextWrapper>
              <StyledH1>A Dental Place, ltd.</StyledH1>
              <StyledH2>Give us your money</StyledH2>
            </TextWrapper>
          </Slide>
          <Slide>
            <SlideContentsContainer>
              <SlideImg src={ fakeOffice } />
            </SlideContentsContainer>
            <TextWrapper>
              <StyledH1>We&apos;re more than an office</StyledH1>
              <StyledH2>Welcome to the <b>family</b></StyledH2>
            </TextWrapper>
          </Slide>
          <Slide>
            <SlideContentsContainer>
              <SlideImg src={ fakeFamily } />
            </SlideContentsContainer>
            <TextWrapper>
              <StyledH1>We will fix your smile</StyledH1>
              <StyledH2>Because you paid us to fix your smile</StyledH2>
            </TextWrapper>
          </Slide>
        </Carousel>
      </CarouselContainer>
    );
  }
}

export default AdpCarousel;
