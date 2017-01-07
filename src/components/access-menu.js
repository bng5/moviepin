import React, { Component } from 'react';

class AccessMenu extends Component {
  render() {
    return (
      <ul className='menu'>
        <li className='menu__item'>
          <a className='menu__link menu__link'>Sign In</a>
        </li>
        <li className='menu__item'>
          <a className='menu__link menu__link--emphasis'>Join</a>
        </li>
      </ul>
    );
  }
}

export default AccessMenu;
