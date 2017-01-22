import React from 'react';
import { shallow } from 'enzyme';

import Join from './join'

describe.skip ('Join Form', () => {

  it ('renders form', () => {
    const wrapper = shallow(<Join/>).find('AccessForm').dive();

    expect(wrapper.find('.form').length).toBe(1);

    expect(wrapper.find('.form InputField[inputName="email"]')
                  .dive()
                  .find('.form__text-input[name="email"]')
                  .length).toBe(1)

    expect(wrapper.find('.form InputField[inputName="username"]')
                  .dive()
                  .find('.form__text-input[name="username"]')
                  .length).toBe(1)

    expect(wrapper.find('.form InputField[inputName="password"]')
                  .dive()
                  .find('.form__text-input[name="password"]')
                  .length).toBe(1)

    expect(wrapper.find('.form .form__submit.-disabled').length).toBe(1);
  });

  describe ('validates fields', () => {
    it ('activates signin button if inputs are fill', () => {
      const wrapper = shallow(<Join/>);
      const accessForm = wrapper.find('AccessForm').dive();

      expect(wrapper.state('shouldDisable')).toBe(true);

      const email = accessForm.find('.form InputField[inputName="email"]')
                                .dive()
                                .find('.form__text-input[name="email"]');
      email.simulate('change', {target: {value: 'test@diablourbano.com'}});

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
