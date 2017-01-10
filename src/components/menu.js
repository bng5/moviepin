import React, { Component } from 'react';

import { AbstractMenu, MenuLink } from './abstract-menu';

class Menu extends Component {

  render() {
    return (
      <AbstractMenu className='menu--for-user'>
        <MenuLink linkId='user-menu'
                  label={<span className='icon-menu'></span>}
                  onClick={() => {
                    this.props.showFormFor('user-menu');
                  }}/>
      </AbstractMenu>
    );
  }
}

export default Menu;
