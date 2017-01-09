import React from 'react';
import { shallow } from 'enzyme';

import SignIn from './signin'

describe ('SignIn Form', () => {

  it ('renders form', () => {
    const wrapper = shallow(<SignIn/>).find('AccessForm').dive();

    expect(wrapper.find('.form').length).toBe(1);

    expect(wrapper.find('.form InputField[inputName="username"]')
                  .dive()
                  .find('.form__text-input[name="username"]')
                  .length).toBe(1)

    expect(wrapper.find('.form InputField[inputName="password"]')
                  .dive()
                  .find('.form__text-input[name="password"]')
                  .length).toBe(1)

    expect(wrapper.find('.form .form__submit--disabled').length).toBe(1);
    expect(wrapper.find('.form .form__submit--fb').length).toBe(1);
  });

  describe ('validates fields', () => {
    it ('activates signin button if inputs are fill', () => {
      const wrapper = shallow(<SignIn/>)
      const accessForm = wrapper.find('AccessForm').dive();

      expect(wrapper.state('shouldDisable')).toBe(true);

      const username = accessForm.find('.form InputField[inputName="username"]')
                                .dive()
                                .find('.form__text-input[name="username"]');
      username.simulate('change', {target: {value: 'diablo'}});

      const password = accessForm.find('.form InputField[inputName="password"]')
                                .dive()
                                .find('.form__text-input[name="password"]');
      password.simulate('change', {target: {value: 'diablo'}});

      expect(wrapper.state('shouldDisable')).toBe(false);
    });
  });
});
