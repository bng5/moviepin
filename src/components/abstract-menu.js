import React, { Component } from 'react';

class MenuLink extends Component {
  render() {
    return (
      <li className='menu__item'>
        <a id={this.props.linkId}
           className={'menu__link ' + this.props.menuLinkClassName}
           onClick={() => {
             this.props.onClick();
           }}>{this.props.label}</a>
      </li>
    );
  }
}

class AbstractMenu extends Component {
  render() {
    return (
      <ul className={'menu ' + this.props.className }>
        {this.props.children}
      </ul>
    );
  }
}

export { AbstractMenu, MenuLink };
