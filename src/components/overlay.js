import React, { Component } from 'react';
import _ from 'lodash';

class Overlay extends Component {
  constructor(props) {
    super(props);

    this.state = {
      hidden: '--hidden',
      showEffect: this.props.showEffect || ''
    };
  }

  toggleOverlay() {
    if (!_.endsWith(this.state.showEffect, 'hidden')) {
      this.setState({
        hidden: '',
        showEffect: `${this.props.showEffect}--hidden`
      });

    } else {
      this.setState({
        hidden: '',
        showEffect: this.props.showEffect
      });
    }

    if (this.props.onClose) {
      this.props.onClose();
    }
  }

  componentWillReceiveProps(nextProps) {
    this.setState({
      hidden: '',
      showEffect: nextProps.showEffect
    });
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
                      ' overlay' + this.state.hidden +
                      ' overlay--' + this.state.showEffect}>
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

export default Overlay;
