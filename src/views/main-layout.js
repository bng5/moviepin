import React, { Component } from 'react';
import Axios from 'axios';

import MPFirebase from '../services/firebase';
import Utils from '../utils';

import Landing from './landing';
import Dashboard from './dashboard';

class MainLayout extends Component {

  constructor() {
    super();

    MPFirebase.firebaseConfig();

    this.state = {
      windowSize: Utils.windowSize()
    };
  }

  onResize() {
    this.setState({
      windowSize: Utils.windowSize()
    });
  }

  componentDidMount() {

    if (typeof window != 'undefined') {
      window.addEventListener('resize', this.onResize.bind(this));
    }
  }

  componentWillUnmount () {
    if( typeof window !== 'undefined' ) {
      window.removeEventListener('resize', this.onResize)
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
      <Dashboard windowSize={this.state.windowSize}/>
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
