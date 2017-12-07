import React, { Component } from 'react';
import HeaderTop from './HeaderTop.js'
import HeaderBottom from './HeaderBottom.js';

class Header extends Component {

  render() {
    return (
      <header>
        <HeaderTop />
        <HeaderBottom />
      </header>
    );
  }

}

export default Header;
