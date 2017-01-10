import React from 'react';
import { shallow } from 'enzyme';

import Menu from './menu';

describe ('<Menu>', () => {
  it ('should render Menu with childs', () => {
    const wrapper = shallow(<Menu/>);
    const menu = wrapper.find('AbstractMenu').dive();

    expect(menu.find('.menu--for-user').length).toBe(1);
    expect(wrapper.find('MenuLink')
                  .length).toBe(1);
  });
});
