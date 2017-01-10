import React from 'react';
import { shallow } from 'enzyme';

import AccessMenu from './access-menu';

describe ('<AccessMenu>', () => {

  it ('renders access elements', () => {
    const wrapper = shallow(<AccessMenu/>);

    expect(wrapper.find('AbstractMenu').length).toBe(1);
    expect(wrapper.find('AbstractMenu')
                  .dive()
                  .find('MenuLink')
                  .length).toBe(2);
  });

  it ('renders join element', () => {
    const wrapper = shallow(<AccessMenu/>);

    expect(wrapper.find('MenuLink')
                  .nodes[1]
                  .props
                  .label).toBe('Join');
  });
});
