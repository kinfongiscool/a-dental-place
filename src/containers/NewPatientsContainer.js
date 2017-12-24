import React, { Component } from 'react';
import NewPatients from '../components/NewPatients.js'
import FooterContainer from './FooterContainer.js';

class NewPatientsContainer extends Component {

  render() {
    return (
      <div>
        <NewPatients />
        <FooterContainer />
      </div>
    );
  }

}

export default NewPatientsContainer;
