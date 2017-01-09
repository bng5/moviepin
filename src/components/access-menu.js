import React, { Component } from 'react';

class AccessMenu extends Component {
  render() {
    return (
      <ul className='menu'>
        <li className='menu__item'>
          <a id='signin-link'
             className='menu__link'
             onClick={() => {
               this.props.showFormFor('signin')
             }}>Sign In</a>
        </li>
        <li className='menu__item'>
          <a id='join-link'
             className='menu__link menu__link--emphasis'
             onClick={() => {
               this.props.showFormFor('join')
             }}>Join</a>
        </li>
      </ul>
    );
  }
}

export default AccessMenu;
