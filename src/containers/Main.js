import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import Home from './Home.js';
import MeetTheTeam from './MeetTheTeam.js';
import Services from './Services.js';
import NewPatientsContainer from './NewPatientsContainer.js';
import Faqs from './Faqs.js';
import Contact from './Contact.js';
import Testimonials from './Testimonials.js';

const Main = () => (
  <main>
    <Switch>
      <Route exact path='/' component={ Home }/>
      <Route path='/meet-the-team' component={ MeetTheTeam }/>
      <Route path='/services' component={ Services }/>
      <Route path='/new-patients' component={ NewPatientsContainer }/>
      <Route path='/faqs' component={ Faqs }/>
      <Route path='/contact' component={ Contact }/>
      <Route path='/testimonials' component={ Testimonials }/>
    </Switch>
  </main>
)

export default Main;
