import React, { Component } from 'react';
import styled, { css } from 'styled-components';
import Carousel from 'nuka-carousel';

import banner from '../images/banner v2.svg';

const FirstSlide = styled.div`
  background: palevioletred;
  width: auto;
  height: 400px;
`;

const SecondSlide = styled.div`
  background-color: wheat;
  width: auto;
  height: 400px;
`;

const ThirdSlide = styled.div`
  background-color: darkseagreen;
  width: auto;
  height: 400px;
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
          <FirstSlide />
          <SecondSlide>
            <div>
              <img src={ banner } />
            </div>
          </SecondSlide>
          <ThirdSlide />
        </Carousel>
      </CarouselContainer>
    );
  }
}

export default AdpCarousel;
