import React from 'react';
import { shallow } from 'enzyme';

import Search from './search'

describe ('<Search>', () => {
  it ('renders input search', () => {
    const wrapper = shallow(<Search/>);

    expect(wrapper.find('.form').length).toBe(1);
    expect(wrapper.find('.form__text-input').length).toBe(1);
    expect(wrapper.find('.form__submit--active').length).toBe(1);
  })
});
