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
    const cardPoster = wrapper.find('.card__detail');

    expect(cardPoster.length).toBe(1);
    expect(cardPoster.find('.detail').length).toBe(1);
    expect(cardPoster.find('.overview').length).toBe(1);
  });

  it ('should render movie details', () => {
    expect(wrapper.contains(<p key='detail-year'
                               className='detail'>
                              <span key='detail-year-span'
                                    className='detail__year'>
                                2000
                              </span>
                            </p>))
                  .toBe(true)
  });

  it ('should toggle add and remove movie', () => {
    wrapper.find('.card__detail .detail__pinit.-pin').simulate('click');
    expect(wrapper.find('.card__detail .detail__pinit.-pin').length).toBe(0)
    expect(wrapper.find('.card__detail .detail__pinit.-unpin').length).toBe(1)

    wrapper.find('.card__detail .detail__pinit').simulate('click');
    expect(wrapper.find('.card__detail .detail__pinit.-unpin').length).toBe(0)
    expect(wrapper.find('.card__detail .detail__pinit.-pin').length).toBe(1)
  });
});
