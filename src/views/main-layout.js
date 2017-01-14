import React, { Component } from 'react';

import Dashboard from './dashboard';

class MainLayout extends Component {

  constructor() {
    super();

    this.state = {
      windowSize: {
        width: window.innerWidth,
        height: window.innerHeight
      }
    };
  }

  onResize() {
    this.setState({
      windowSize: {
        width: window.innerWidth,
        height: window.innerHeight
      }
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
      <Dashboard movies={this.props.movies}
                 windowSize={this.state.windowSize}/>
    );
  }
}

export default MainLayout;
