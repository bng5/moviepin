import React from 'react';
import { shallow } from 'enzyme';

import AccessMenu from './access-menu';

describe ('<AccessMenu>', () => {

  it ('renders join element', () => {
    const wrapper = shallow(<AccessMenu/>);

    expect(wrapper.find('MenuLink')
                  .props()
                  .label).toBe('Join');
  });
});
