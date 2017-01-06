import React, { Component } from 'react';

class AccessMenu extends Component {
  render() {
    return (
      <div className='menu menu--inline'>
        <a className='menu__link menu__link--signin'>Sign In</a>
        <a className='menu__link menu__link--join'>Join</a>
      </div>
    );
  }
}

export default AccessMenu;
