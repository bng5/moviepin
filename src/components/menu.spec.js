import React from 'react';
import { shallow } from 'enzyme';

import Menu from './menu';

describe ('<Menu>', () => {
  it ('should render Menu with childs', () => {
    const wrapper = shallow(<Menu/>);

    expect(wrapper.find('.menu__access-util').length).toBe(1);
    expect(wrapper.find('.menu.menu--for-user').length).toBe(1);
    expect(wrapper.find('.menu--for-user .menu__link').length).toBe(3);
  });

  it ('should toggle menu from menu__access', () => {
    const wrapper = shallow(<Menu/>);

    wrapper.find('.menu__access-util').simulate('click');
    expect(wrapper.find('.menu.menu--for-user.menu--disabled').length).toBe(1);

    wrapper.find('.menu__access-util').simulate('click');
    expect(wrapper.find('.menu.menu--for-user.menu--disabled').length).toBe(0);
  });
});
