import React, { Component } from 'react';
import styled from 'styled-components';
import FooterContainer from './FooterContainer.js';

const Container = styled.div`
  max-width: 1024px;
  margin: 2rem auto;
`;

const FormContainer = styled.div`
  max-width: 640px;
  margin: 2rem auto;
`;

const Styledp = styled.p`
  padding: 0 1rem 1rem 1rem;
`;

const StyledForm = styled.form`
  max-width: 640px;
  padding: 0 1rem;
  margin: auto;
  display: flex;
  flex-direction: column;
`;

const StyledInput = styled.input`
  color: #333;
  font-size: 1em;
  margin: 0 0 1rem 0;
  padding: .8rem;
  transition: all 300 ease-in-out;
  background-color: #FDFEFF;
  border: 1px solid #333;

  ::placeholder {
    opacity: .8;
  }
`;

const StyledTextarea = styled.textarea`
  color: #333;
  font-size: 1em;
  margin: 0 0 1rem 0;
  padding: .8rem;
  background-color: #FDFEFF;
  border: 1px solid #333;
  transition: all 300 ease-in-out;

  ::placeholder {
    opacity: .8;
  }
`;

const StyledButton = styled.button`
  font-size: 1em;
  margin: 0 auto 1rem auto;
  padding: .5rem 2rem;
  color: #58A6FF;
  background-color: #FDFEFF;
  border: 2px solid #58A6FF;
  corner-radius: 2px;
  opacity: ${props => props.disabled ? '.2' : '1'};

  transition: all 150ms ease;

  &:hover {
    color: ${props => props.disabled ? '' : '#FDFEFF'};
    background: ${props => props.disabled ? '' : '#58A6FF'};
  }
`;

class Contact extends Component {

  constructor() {
    super();
    this.state = {
      name: '',
      number: '',
      email: '',
      message: ''
    };
  }

  handleNameChange = (evt) => {
    this.setState({ name: evt.target.value });
  }

  handleNumberChange = (evt) => {
    this.setState({ number: evt.target.value });
  }

  handleEmailChange = (evt) => {
    this.setState({ email: evt.target.value });
  }

  handleMessageChange = (evt) => {
    this.setState({ message: evt.target.value });
  }

  handleSubmit = () => {
    const { name, number, email, message } = this.state;
  }

  canBeSubmitted() {
    const { name, number, email, message } = this.state;
    return (
      name.length > 0 &&
      (number.length > 0 || email.length > 0) &&
      message.length > 0
    );
  }

  render() {
    const isEnabled = this.canBeSubmitted();

    return (
      <div>
        <Container>
          <FormContainer>
            <Styledp>Send us a message! Fill out the form below and we&#39;ll get back to you as soon as we can.</Styledp>
            <StyledForm method="POST" action="http://formspree.io/adentalplace@gmail.com">
              <StyledInput type="text" name="name" placeholder="Your name*" onChange={this.handleNameChange}/>
              <StyledInput type="text" name="phone" placeholder="Your number*" onChange={this.handleNumberChange}/>
              <StyledInput type="email" name="email" placeholder="Your email*" onChange={this.handleEmailChange}/>
              <StyledTextarea name="message" placeholder="Your message*" onChange={this.handleMessageChange}></StyledTextarea>
              <StyledButton disabled={ !isEnabled } type="submit">Send</StyledButton>
            </StyledForm>
          </FormContainer>
        </Container>
        <FooterContainer />
      </div>
    );
  }

}

export default Contact;
