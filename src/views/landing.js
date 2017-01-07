import React, { Component } from 'react';

import AccessMenu from '../components/access-menu';

class Landing extends Component {

  render() {
    const containerRow = 'container--flex container--flex--row';

    return (
      <div className='container'>
        <div className={'container--full-screen' +
                        ' container--flex' +
                        ' container--flex--column'}>
          <div className={containerRow +
                          ' container--flex--align-right' +
                          ' container--flex--align-middle'}>
            <AccessMenu/>
          </div>

          <div className={containerRow +
                          ' container--flex--priority' +
                          ' container--flex--align-center' +
                          ' container--flex--align-top'}>
            <div className='logo logo--landing'>
              <span className='logo__icon icon-pin3'></span>
              <h1 className='logo__name'>
                Movie<span className='logo__name--emphasis'>Pin</span>
              </h1>
            </div>
          </div>

          <div className={containerRow + 
                          ' container--flex--align-center' +
                          ' container--flex--align-top'}>
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
