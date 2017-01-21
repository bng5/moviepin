import React, { Component } from 'react';

import Utils from '../utils';

import MoviesMock from '../mocks/movies';

import Landing from './landing';
import Dashboard from './dashboard';

class MainLayout extends Component {

  constructor() {
    super();

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

  render() {
    return (
      // <Landing/>
      <Dashboard movies={MoviesMock}
                 windowSize={this.state.windowSize}/>
    );
  }
}

export default MainLayout;
