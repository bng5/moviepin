import React from 'react';
import { shallow } from 'enzyme';

import Landing from './landing';

describe ('renders <LandingView>', () => {
  beforeEach(() => {
    let Logo = jest.fn();
    Logo.mockReturnValue('./some-path/logo.png');
  });

  it ('should diplay design elements', () => {
    const wrapper = shallow(<Landing/>).find('.container__landing');

    expect(wrapper.find('AccessMenu').length).toBe(1);
    expect(wrapper.find('.landing__branding').length).toBe(1);
    expect(wrapper.find('.landing__headline').length).toBe(1);
  });
});

describe.skip ('show access forms', () => {
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
