import React, { Component } from 'react';

import Overlay from '../components/overlay';
import Menu from '../components/menu';
import Search from '../components/search';

class Dashboard extends Component {

  constructor() {
    super();

    this.state = {
      overlayClass: '',
      formToShow: ''
    };
  }

  showFormFor(form) {
    this.setState({
      overlayClass: 'content-push--right',
      formToShow: `${form}Form`
    });
  }

  closeOverlay() {
    this.setState({
      overlayClass: 'content-push--right--hidden'
    });
  }

  render() {
    const containerRow = 'container--flex container--flex--row';

    return (
      <div className='container'>
        <Overlay showEffect={this.state.overlayClass}
                 onClose={this.closeOverlay.bind(this)}>
        </Overlay>

        <Menu showFormFor={this.showFormFor.bind(this)}/>

        <div className={'container--flex' +
                        ' container--full-screen' +
                        ' container--flex--column' +
                        ' container--' + this.state.overlayClass +
                        ' container--dashboard'}>
          <div className={containerRow +
                          ' container--flex--align-center' +
                          ' container--flex--align-middle'}>
            <Search/>
          </div>
        </div>
      </div>
    );
  }
}

export default Dashboard;
