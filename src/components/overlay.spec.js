import React from 'react';
import { shallow } from 'enzyme';

import Overlay from './overlay';

describe ('renders <Overlay>', () => {

  it ('should not display by default', () => {
    const wrapper = shallow(<Overlay inEffect='-hidden'/>);

    expect(wrapper.find('.overlay.-hidden').length).toBe(1);
  });
});
