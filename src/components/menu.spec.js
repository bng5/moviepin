import React from 'react';
import { shallow } from 'enzyme';

import Menu from './menu';

describe ('<Menu>', () => {
  it ('should render Menu with childs', () => {
    const wrapper = shallow(<Menu className='header__menu'/>);
    const menu = wrapper.find('AbstractMenu').dive();

    expect(menu.find('.header__menu').length).toBe(1);
    expect(wrapper.find('MenuLink')
                  .length).toBe(1);
  });
});
