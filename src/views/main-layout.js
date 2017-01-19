import React, { Component } from 'react';

import MoviesMock from '../mocks/movies';

import Utils from '../utils';

import Landing from './landing';
import Dashboard from './dashboard';

class MainLayout extends Component {

  constructor() {
    super();

    this.state = {
      windowSize: this.windowSize()
    };
  }

  windowSize() {
    const pixelRatio = Utils.pixelRatio();

    return {
      width: window.innerWidth / pixelRatio,
      height: window.innerHeight / pixelRatio
    }
  }

  onResize() {
    this.setState({
      windowSize: this.windowSize()
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
