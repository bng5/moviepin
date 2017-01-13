import React, { Component } from 'react';

class Overlay extends Component {

  render() {
    const inEffect = this.props.inEffect;
    const outEffect = this.props.outEffect;

    return (
      <div className={'overlay -full-screen -flex-row -middle ' +
                      inEffect + ' ' + outEffect}>
        <a className='overlay__close'
           onClick={() => {
             this.props.onClose();
           }}>
          <span className='icon-circle-cross'></span>
        </a>

        {this.props.children}
      </div>
    );
  }
}

Overlay.defaultProps = {
  outEffect: '',
  inEffect: ''
};

export default Overlay;
