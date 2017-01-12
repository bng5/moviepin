import React from 'react';
import { shallow } from 'enzyme';

import MoviesMock from '../mocks/movies';

import MovieDetail from './movie-detail';

describe ('<MovieDetail>', () => {
  let wrapper;

  beforeEach (() => {
    wrapper = shallow(<MovieDetail movie={MoviesMock[0]}/>);
  });

  it ('should render MovieDetail', () => {
    const cardPoster = wrapper.find('.card--detail');

    expect(cardPoster.length).toBe(1);
    expect(cardPoster.find('.card__poster').length).toBe(1);
    expect(cardPoster.find('.card__pin').length).toBe(1);
  });

  it ('should render movie details', () => {
    expect(wrapper.contains(<p className='movie__detail'>
                              <span className='movie__detail--year'>
                                2000
                              </span>
                            </p>))
                  .toBe(true)
  });

  it ('should toggle add and remove movie', () => {
    wrapper.find('.card--detail .card__pin').simulate('click');
    expect(wrapper.find('.card--detail .card__pin').length).toBe(0)
    expect(wrapper.find('.card--detail .card__unpin').length).toBe(1)

    wrapper.find('.card--detail .card__unpin').simulate('click');
    expect(wrapper.find('.card--detail .card__unpin').length).toBe(0)
    expect(wrapper.find('.card--detail .card__pin').length).toBe(1)
  });
});
