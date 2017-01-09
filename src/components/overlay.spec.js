import React from 'react';
import { shallow } from 'enzyme';

import Overlay from './overlay';

describe ('renders <Overlay>', () => {

  it ('should not display by default', () => {
    const wrapper = shallow(<Overlay/>);

    expect(wrapper.find('.overlay--hidden').length).toBe(1);
  });

  it ('should hide when visible', () => {
    const wrapper = shallow(<Overlay showEffect='content-push'/>);

    expect(wrapper.find('.overlay--content-push').length).toBe(1);

    wrapper.find('.overlay__close').simulate('click');

    expect(wrapper.find('.overlay--content-push--hidden').length).toBe(1);
    expect(wrapper.find('.overlay--content-push').length).toBe(0);
  });
});
