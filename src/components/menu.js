import React, { Component } from 'react';

class Menu extends Component {

  constructor() {
    super();

    this.state = {
      menuVisibleState: 'active'
    }
  }

  toggleMenu() {
    if (this.state.menuVisibleState == 'disabled') {
      this.setState({ menuVisibleState: 'active' });
    } else {
      this.setState({ menuVisibleState: 'disabled' });
    }
  }

  render() {
    return (
      <div className='container'>
        <a className='menu__access-util'
           onClick={this.toggleMenu.bind(this)}>Menu</a>
        <ul className={`menu menu--for-user
                        menu--${this.state.menuVisibleState}`}>
          <li className='menu__item'>
            <a href='/logout' className='menu__link'>
              Profile
            </a>
          </li>
          <li className='menu__item'>
            <a href='/explore' className='menu__link'>
              Explore
            </a>
          </li>
          <li className='menu__item'>
            <a href='/logout' className='menu__link'>
              Logout
            </a>
          </li>
        </ul>
      </div>
    );
  }
}

export default Menu;
