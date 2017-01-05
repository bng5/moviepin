import React from 'react';
import { shallow } from 'enzyme';

import Landing from './landing';

describe('<Landing>', () => {

  it ('renders signin element', () => {
    const wrapper = shallow(<Landing/>);

    expect(wrapper.find('.menu.menu--inline').length).toBe(1);
    expect(wrapper.find('.menu.menu--inline .menu__link.menu__link--signin')
                  .length).toBe(1);
  });

  it ('renders join element', () => {
    const wrapper = shallow(<Landing/>);

    expect(wrapper.find('.menu.menu--inline').length).toBe(1);
    expect(wrapper.find('.menu.menu--inline .menu__link.menu__link--join')
                  .length).toBe(1);
  });
});
