import React, { Component } from 'react';

import MPFirebase from '../services/firebase';

import Landing from './landing';
import Dashboard from './dashboard';

class MainLayout extends Component {

  constructor() {
    super();

    MPFirebase.firebaseConfig();

    this.state = {
      canAccess: false
    }
  }

  shouldAccess(canAccess) {
    if (canAccess) {
      this.setState({
        canAccess: canAccess
      });
    }
  }

  landing() {
    return (
      <Landing shouldAccess={(canAccess) => {
        this.shouldAccess(canAccess);
      }}/>
    );
  }

  dashboard() {
    return (
      <Dashboard/>
    );
  }

  render() {
    let displayToShow;

    if (!this.state.canAccess) {
      displayToShow = this.landing();
    } else {
      displayToShow = this.dashboard();
    }

    return (
      displayToShow
    );
  }
}

export default MainLayout;
