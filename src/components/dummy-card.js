import React, { Component } from 'react';

class DummyCard extends Component {
  
  onResize() {
    this.props.onWindowResize()
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
    const dummyWidth = this.props.dummyWidth + 'px';

    return (
      <div className='container__dummy'
           style={{width: dummyWidth}}/>
    );
  }
}

export default DummyCard;
