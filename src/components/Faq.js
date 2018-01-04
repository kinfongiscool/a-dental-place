import React, { Component } from 'react';
import styled from 'styled-components';
import { media } from '../media.js';

const FaqContainer = styled.div`
  max-width: 1024px;
  margin: auto auto 2rem auto;
  padding: ${props => props.colored ? '1rem 2rem' : '0 2rem'};
  background-color: ${props => props.colored ? '#EBF4FF' : ''};
`;

const FaqQuestion = styled.p`

`;

const FaqAnswer = styled.p`

`;

class Faq extends Component {

  render() {
    return (
      <FaqContainer colored={ this.props.colored }>
        <FaqQuestion colored={ this.props.colored }>{ this.props.question }</FaqQuestion>
        <FaqAnswer colored={ this.props.colored }>{ this.props.answer }</FaqAnswer>
      </FaqContainer>
    );
  }

}

export default Faq;
