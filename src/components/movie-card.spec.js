import React from 'react';
import { shallow } from 'enzyme';

import MovieCard from './movie-card';

describe ('<MovieCard>', () => {
  it ('should render MovieCard', () => {
    const wrapper = shallow(<MovieCard/>);

    expect(wrapper.find('.card.card--poster').length).toBe(1);
    expect(wrapper.find('.card--poster .card__poster').length).toBe(1);
    expect(wrapper.find('.card--poster .card__pin').length).toBe(1)
    expect(wrapper.find('.headline').length).toBe(1)
  });

  it ('should toggle add and remove movie', () => {
    const wrapper = shallow(<MovieCard/>);

    wrapper.find('.card--poster .card__pin').simulate('click');
    expect(wrapper.find('.card--poster .card__pin').length).toBe(0)
    expect(wrapper.find('.card--poster .card__unpin').length).toBe(1)

    wrapper.find('.card--poster .card__unpin').simulate('click');
    expect(wrapper.find('.card--poster .card__unpin').length).toBe(0)
    expect(wrapper.find('.card--poster .card__pin').length).toBe(1)
  });
});
