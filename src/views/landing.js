import React, { Component } from 'react';

import AccessMenu from '../components/access-menu';

class Landing extends Component {
  render() {
    return (
      <div className='container container--column'>
        <div className='container container--row container--row-rigth'>
          <AccessMenu/>
        </div>

        <div className='container container--row container--row-rigth'>
          <div className='logo logo--landing'>
            <img src='./logo.jpg'/>
            <h1>MoviePin</h1>
          </div>
        </div>

        <div className='container container--row container--row-rigth'>
          <h2 className='headline headline--landing'>movies worth to watch.</h2>
        </div>
      </div>
    );
  }
}

export default Landing;
