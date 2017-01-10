import React, { Component } from 'react';

import Overlay from '../components/overlay';
import Menu from '../components/menu';
import Search from '../components/search';

class LayoutWithOverlay extends Component {

  constructor() {
    super();

    this.state = {
      overlayClass: this.props.overlayClass,
    };
  }

  closeOverlay() {
    this.setState({
      overlayClass: 'content-push--hidden',
    });
  }

  render() {
    return (
      <div className='container'>
        <Overlay showEffect={this.props.showEffect}
                 onClose={this.props.closeOverlay}>
        </Overlay>

        {this.props.children}
      </div>
    );
  }
}

export default LayoutWithOverlay;
