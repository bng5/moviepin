import React from 'react';
import { shallow } from 'enzyme';

import MovieDetail from './movie-detail';

describe ('<MovieDetail>', () => {
  it ('should render MovieDetail', () => {
    const wrapper = shallow(<MovieDetail/>);
    const cardPoster = wrapper.find('.card--detail');

    expect(cardPoster.length).toBe(1);
    expect(cardPoster.find('.card__poster').length).toBe(1);
    expect(cardPoster.find('.card__pin').length).toBe(1);
  });

  it ('should render MovieDetailNav', () => {
    const wrapper = shallow(<MovieDetail/>);
    const nav = wrapper.find('.card--detail MovieDetailNav').dive();

    expect(nav.find('.card__nav').length).toBe(1)
    expect(nav.find('.card__nav .nav__headline').length).toBe(1)
    expect(nav.find('.card__nav .nav__back').length).toBe(1)
  });

  it ('should render Staff elements', () => {
    const wrapper = shallow(<MovieDetail/>);
    const directed = wrapper.find('.card--detail')
                            .find('MovieDetailStaff.directed-by').dive();

    expect(directed.find('.card__staff').length).toBe(1);
    expect(directed.find('.staff__picture').length).toBe(1);
    expect(directed.find('.staff__name').length).toBe(1);
    expect(directed.find('.staff__role').length).toBe(1);

    expect(wrapper.find('.card--detail')
                  .find('MovieDetailStaff.written-by').length).toBe(1);

    expect(wrapper.find('.card--detail')
                  .find('MovieDetailStaff.produced-by').length).toBe(1);

    expect(wrapper.find('.card--detail')
                  .find('MovieDetailStaff.cast').length).toBe(3);

  });

  it ('should toggle add and remove movie', () => {
    const wrapper = shallow(<MovieDetail/>);

    wrapper.find('.card--detail .card__pin').simulate('click');
    expect(wrapper.find('.card--detail .card__pin').length).toBe(0)
    expect(wrapper.find('.card--detail .card__unpin').length).toBe(1)

    wrapper.find('.card--detail .card__unpin').simulate('click');
    expect(wrapper.find('.card--detail .card__unpin').length).toBe(0)
    expect(wrapper.find('.card--detail .card__pin').length).toBe(1)
  });
});
