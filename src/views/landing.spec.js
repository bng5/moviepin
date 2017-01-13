import React from 'react';
import { shallow } from 'enzyme';

import Landing from './landing';

describe ('renders <LandingView>', () => {
  it ('should diplay design elements', () => {
    const wrapper = shallow(<Landing/>).find('.container--full-screen');

    expect(wrapper.find('AccessMenu').length).toBe(1);
    expect(wrapper.find('.branding__logo').length).toBe(1);
    expect(wrapper.find('.container__headline--landing').length).toBe(1);
  });
});

describe ('show access forms', () => {
  it ('should render sigin form', () => {
    const wrapper = shallow(<Landing/>);
    const accessMenu = wrapper.find('AccessMenu').dive();

    expect(wrapper.find('Overlay').length).toBe(1);

    accessMenu.find('MenuLink').first().simulate('click');

    expect(wrapper.find('SignIn').length).toBe(1);
  });

  it ('should render join form', () => {
    const wrapper = shallow(<Landing/>);
    const accessMenu = wrapper.find('AccessMenu').dive();

    expect(wrapper.find('Join').length).toBe(0);

    accessMenu.find('MenuLink').last().simulate('click');

    expect(wrapper.find('Join').length).toBe(1);
  });
});
