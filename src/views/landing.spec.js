import React from 'react';
import { shallow } from 'enzyme';

import Landing from './landing';

describe ('renders <LandingView>', () => {
  it ('should diplay design elements', () => {
    const wrapper = shallow(<Landing/>).find('.container.container--column');

    expect(wrapper.find('AccessMenu').length).toBe(1);
    expect(wrapper.find('.logo.logo--landing').length).toBe(1);
    expect(wrapper.find('.container__headline--landing').length).toBe(1);
  });
});
