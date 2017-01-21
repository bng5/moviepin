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
                               className='detail -as-summary'>
                              <span key='detail-year-span'
                                    className='detail__year'>
                                2000
                              </span>
                            </p>))
                  .toBe(true)
  });
});
