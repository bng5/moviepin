import React, { Component } from 'react';

import Firebase from 'firebase';
import FirebaseUI from 'firebaseui';

import Overlay from '../components/overlay';
import AccessMenu from '../components/access-menu';
import SignIn from '../components/signin';
import Join from '../components/join';

import Logo from '../images/logo.png';

class Landing extends Component {

  constructor() {
    super();

    this.configureFirebaseUI();

    this.state = {
      signinForm: <SignIn shouldAccess={(canAccess) => {
        this.props.shouldAccess(canAccess);
      }}/>,
      joinForm: <Join shouldAccess={(canAccess) => {
        this.props.shouldAccess(canAccess);
      }}/>,
      inOverlayEffect: '',
      outOverlayEffect: ''
    };
  }

  configureFirebaseUI() {
    const uiConfig = {
      signInOptions: [
        Firebase.auth.FacebookAuthProvider.PROVIDER_ID
      ],
      callbacks: {
        signInSuccess: (currentUser, credential, redirectUrl) => {
          this.props.shouldAccess(true);
          localStorage.setItem('firebaseLogin', false);

          return true;
        }
      }
    };
    
    const firebaseUI = new FirebaseUI.auth.AuthUI(Firebase.auth());

    firebaseUI.start('#moviepin-firebaseui', uiConfig);
  }

  showFormFor() {
    this.setState({
      inOverlayEffect: '-content-push',
      outOverlayEffect: ''
    });
  }

  closeOverlay() {
    this.setState({
      outOverlayEffect: '-hidden'
    });
  }

  loadingOverlay() {

    return (
      <div className='container__loading -full-screen -flex-column -middle'>
        <h2 className='loading__label -emphasis'>Loading</h2>
        <p className='loading__dots'>
          <span className='dot -gray'>.</span>
          <span className='dot -emphasis'>.</span>
          <span className='dot -alternative'>.</span>
        </p>
      </div>
    );

  }

  loginWithFirebase() {
    localStorage.setItem('firebaseLogin', true);
  }

  componentDidMount() {
    if (localStorage.getItem('firebaseLogin') == 'true') {
      this.setState({
        firebaseLoading: this.loadingOverlay()
      });
    }
  }

  render() {
    const inOverlayEffect = this.state.inOverlayEffect;
    const outOverlayEffect = this.state.outOverlayEffect;
    const loadingOverlay = this.state.firebaseLoading;

    return (
      <div className='container'>
        <Overlay inEffect={this.state.inOverlayEffect}
                 outEffect={this.state.outOverlayEffect}
                 onClose={ this.closeOverlay.bind(this) }>
          <div id='moviepin-firebaseui'
               onMouseDown={this.loginWithFirebase.bind(this)}/>
        </Overlay>

        {loadingOverlay}

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
