import React, { Component } from 'react';
import styled from 'styled-components';
import logo from '../images/logo.svg';
import HeaderContainer from './HeaderContainer.js';
import Main from './Main.js';

const AppContainer = styled.div`
  text-align: center;
`;

class App extends Component {
  render() {
    return (
      <AppContainer>
        <HeaderContainer />
        <Main />
      </AppContainer>
    );
  }
}

export default App;
