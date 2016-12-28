import React from 'react';
import { shallow } from 'enzyme';

import Search from './search'

describe('<Search>', () => {
  it ('renders input search', () => {
    const wrapper = shallow(<Search/>)

    expect(wrapper.find('.b-form').length).toBe(1)
    expect(wrapper.find('.b-form__input-box').length).toBe(1)
    expect(wrapper.find('.b-form__search-button').length).toBe(1)
  })
});
