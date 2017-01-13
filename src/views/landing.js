import React, { Component } from 'react';

import Overlay from '../components/overlay';
import AccessMenu from '../components/access-menu';
import SignIn from '../components/signin';
import Join from '../components/join';

class Landing extends Component {

  constructor() {
    super();

    this.state = {
      signinForm: <SignIn/>,
      joinForm: <Join/>,
      inOverlayEffect: '',
      outOverlayEffect: '',
      formToShow: ''
    };
  }

  showFormFor(form) {
    this.setState({
      inOverlayEffect: '-content-push',
      outOverlayEffect: '',
      formToShow: `${form}Form`
    });
  }

  closeOverlay() {
    this.setState({
      outOverlayEffect: '-hidden'
    });
  }

  render() {
    const accessForm = this.state[this.state.formToShow];

    const inOverlayEffect = this.state.inOverlayEffect;
    const outOverlayEffect = this.state.outOverlayEffect;

    return (
      <div className='container'>
        <Overlay inEffect={this.state.inOverlayEffect}
                 outEffect={this.state.outOverlayEffect}
                 onClose={ this.closeOverlay.bind(this) }>
          {accessForm}
        </Overlay>

        <div className={'container__landing -full-screen -flex-column ' +
                        inOverlayEffect + ' ' + outOverlayEffect}>
          <div className='landing__menu -flex-row -right-center'>
            <AccessMenu showFormFor={this.showFormFor.bind(this)}/>
          </div>

          <div className={'landing__branding -flex-row ' +
                          '-priority2 -center-bottom'}>
            <div className='branding__logo'> 
              <span className='logo__icon icon-pin -emphasis'></span>
              <h1 className='logo__name'>
                Movie<span className='-emphasis'>Pin</span>
              </h1>
            </div>
          </div>

          <div className={'landing__headline -flex-row -middle'}>
            <h2 className='headline__text -as-slogan'>
              movies
              <span className='-emphasis'> worth </span>
              to watch<span className='-emphasis'>!</span>
            </h2>
          </div>
        </div>
      </div>
    );
  }
}

export default Landing;
