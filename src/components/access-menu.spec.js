import React from 'react';
import { shallow } from 'enzyme';

import AccessMenu from './access-menu';

describe ('<AccessMenu>', () => {

  it ('renders access elements', () => {
    const wrapper = shallow(<AccessMenu/>);

    expect(wrapper.find('.menu.menu').length).toBe(1);
    expect(wrapper.find('.menu.menu .menu__link')
                  .length).toBe(2);
  });

  it ('renders join element', () => {
    const wrapper = shallow(<AccessMenu/>);

    expect(wrapper.find('.menu.menu').length).toBe(1);
    expect(wrapper.find('.menu.menu .menu__link.menu__link--emphasis')
                  .length).toBe(1);
  });
});
