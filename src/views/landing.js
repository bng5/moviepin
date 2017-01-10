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
      overlayClass: '',
      formToShow: ''
    };
  }

  showFormFor(form) {
    this.setState({
      overlayClass: 'content-push',
      formToShow: `${form}Form`
    });
  }

  closeOverlay() {
    this.setState({
      overlayClass: 'content-push--hidden'
    });
  }

  render() {
    const containerRow = 'container--flex container--flex--row';
    const accessForm = this.state[this.state.formToShow];

    return (
      <div className='container'>
        <Overlay showEffect={this.state.overlayClass}
                 onClose={this.closeOverlay.bind(this)}>
          {accessForm}
        </Overlay>

        <div className={'container--full-screen' +
                        ' container--flex' +
                        ' container--flex--column' +
                        ' container--' + this.state.overlayClass +
                        ' container--landing'}>
          <div className={containerRow +
                          ' container--flex--align-right' +
                          ' container--flex--align-middle'}>
            <AccessMenu showFormFor={this.showFormFor.bind(this)}/>
          </div>

          <div className={containerRow +
                          ' container--flex--priority2' +
                          ' container--flex--align-center' +
                          ' container--flex--align-bottom'}>
            <div className='logo logo--landing'>
              <span className='logo__icon icon-pin logo--emphasis'></span>
              <h1 className='logo__name'>
                Movie<span className='logo--emphasis'>Pin</span>
              </h1>
            </div>
          </div>

          <div className={containerRow + 
                          ' container--flex--align-center' +
                          ' container--flex--align-middle'}>
            <h2 className='container__headline container__headline--landing'>
              movies
              <span className='container__headline--emphasis'> worth </span>
              to watch<span className='container__headline--emphasis'>!</span>
            </h2>
          </div>
        </div>
      </div>
    );
  }
}

export default Landing;
