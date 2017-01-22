import React, { Component } from 'react';

import Overlay from '../components/overlay';
import AccessMenu from '../components/access-menu';
import SignIn from '../components/signin';
import Join from '../components/join';

class Landing extends Component {

  constructor() {
    super();

    this.state = {
      signinForm: <SignIn shouldAccess={(canAccess) => {
        this.props.shouldAccess(canAccess);
      }}/>,
      joinForm: <Join shouldAccess={(canAccess) => {
        this.props.shouldAccess(canAccess);
      }}/>,
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
            <h1 className='logo__name'>
              <span className='-hidden'>MoviePin</span>
              <img className='-as-image'
                   src='./images/logo.png' alt='moviepin'/>
            </h1>
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
