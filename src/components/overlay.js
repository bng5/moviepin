import React, { Component } from 'react';
import _ from 'lodash';

class Overlay extends Component {

  toggleOverlay() {
    if (this.props.onClose) {
      this.props.onClose();
    }
  }

  render() {
    return (
      <div className={'container' +
                      ' container--full-screen' +
                      ' container--flex' +
                      ' container--flex--row' +
                      ' container--flex--align-center' +
                      ' container--flex--align-middle' +
                      ' container--overlay' +
                      ' overlay' + this.props.showEffect + this.props.hidden}>
        <a className='overlay__close'
           onClick={() => {
             this.toggleOverlay();
           }}>
          <span className='icon-circle-cross'></span>
        </a>

        {this.props.children}
      </div>
    );
  }
}

Overlay.defaultProps = {
  hidden: '--hidden',
  showEffect: ''
};

export default Overlay;
