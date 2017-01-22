import React, { Component } from 'react';

import { AbstractMenu, MenuLink } from './abstract-menu';

class UserMenu extends Component {

  constructor(props) {
    super(props);

    this.state = {
      activeMenu: 'videoteque'
    };
  }

  isActive(menuId) {
    if (menuId == this.state.activeMenu) {
      return '-active'
    }
  }

  menuClick(menuId) {
    if (menuId != 'dashboard-menu') {
      this.setState({
        activeMenu: menuId
      });
    }

    this.props.showFormFor(menuId);
  }

  render() {
    return (
      <AbstractMenu className={this.props.className + ' -left-top'}>
        <MenuLink linkId='dashboard-menu'
                  label={<span className='icon-search'></span>}
                  menuItemClassName='-priority2 -to-left -fix-height-for-user'
                  altLink='add a movie'
                  onClick={this.menuClick.bind(this, 'dashboard-menu')}/>
        <MenuLink linkId='videoteque-menu'
                  label={<span className='icon-videoteque'></span>}
                  menuLinkClassName={this.isActive('videoteque')}
                  altLink='show my pinned movies'
                  onClick={this.menuClick.bind(this, 'videoteque')}/>
        <MenuLink linkId='explore-menu'
                  label={<span className='icon-explore'></span>}
                  menuLinkClassName={this.isActive('explore')}
                  altLink='explore top pinned movies'
                  onClick={this.menuClick.bind(this, 'explore')}/>
        <MenuLink linkId='follow-menu'
                  label={<span className='icon-group'></span>}
                  menuItemClassName='-fix-height-for-user'
                  menuLinkClassName={this.isActive('follow')}
                  altLink='follow people'
                  onClick={this.menuClick.bind(this, 'follow')}/>
      </AbstractMenu>
    );
  }
}

export default UserMenu;
