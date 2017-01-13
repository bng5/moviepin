import React, { Component } from 'react';

import { AbstractMenu, MenuLink } from './abstract-menu';

class Menu extends Component {

  render() {
    return (
      <AbstractMenu className={this.props.className + ' -right-top'}>
        <MenuLink linkId='user-menu'
                  label={<span className='icon-menu'></span>}
                  menuItemClassName='-for-dashboard'
                  onClick={() => {
                    this.props.showFormFor('user-menu');
                  }}/>
      </AbstractMenu>
    );
  }
}

export default Menu;
