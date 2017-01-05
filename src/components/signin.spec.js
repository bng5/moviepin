import React from 'react';
import { shallow } from 'enzyme';

import SignIn from './signin'

describe ('SignIn Form', () => {

  it ('renders form', () => {
    const wrapper = shallow(<SignIn/>);

    expect(wrapper.find('.form').length).toBe(1);

    expect(wrapper.find('.form .form__text-input[name="username"]')
                  .length).toBe(1)
    expect(wrapper.find('.form .form__text-input[name="password"]')
                  .length).toBe(1)
    expect(wrapper.find('.form .form__submit--disabled').length).toBe(1);

    expect(wrapper.find('.form .fb-sso').length).toBe(1);
  });

  describe ('validates fields', () => {
    it ('activates signin button if inputs are fill', () => {
      const wrapper = shallow(<SignIn/>);

      expect(wrapper.find('.form .form__submit--disabled').length).toBe(1);
      expect(wrapper.find('.form .form__submit--active').length).toBe(0);

      const username = wrapper.find('.form .form__text-input[name="username"]');
      username.props().onChange({target: {value: 'diablo'}})

      const password = wrapper.find('.form .form__text-input[name="password"]');
      password.props().onChange({target: {value: 'diablo-pwd'}})

      expect(wrapper.find('.form .form__submit--active').length).toBe(1);
    });
  });
});
