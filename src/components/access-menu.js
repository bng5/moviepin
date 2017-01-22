import React, { Component } from 'react';

import { AbstractMenu, MenuLink } from './abstract-menu';

class AccessMenu extends Component {
  render() {
    return (
      <AbstractMenu>
        <MenuLink linkId='join-link'
                  menuLinkClassName='-emphasis'
                  label='Join'
                  onClick={() => {
                    this.props.showFormFor('join');
                  }}/>
      </AbstractMenu>
    );
  }
}

export default AccessMenu;
