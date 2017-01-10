import React from 'react';
import { shallow } from 'enzyme';

import MovieCard from './movie-card';

describe ('<MovieCard>', () => {

    const movie = {
      title: 'requiem for a dream',
      year: '2000',
      poster: 'https://image.tmdb.org/t/p/' +
              'w300_and_h450_bestv2/muym4jTjdLx7E6as09d1wlC3sOB.jpg',
      crew: {
        director: 'darren aronofsky',
        writer: 'huber selby jr.'
      },
      cast: [
        'jared leto',
        'jennifer connelly',
        'marlon wayans'
      ]
    };

  it ('should render MovieCard', () => {
    const wrapper = shallow(<MovieCard movie={movie}/>);
    const cardPoster = wrapper.find('.card--poster');

    expect(cardPoster.length).toBe(1);
    expect(cardPoster.find('.card__poster').length).toBe(1);
    expect(wrapper.find('.card__pinit').length).toBe(1)
  });

  it ('should toggle add and remove movie', () => {
    const wrapper = shallow(<MovieCard movie={movie}/>);

    wrapper.find('.card__pinit').simulate('click');
    expect(wrapper.find('.card__pinit--pin').length).toBe(0)
    expect(wrapper.find('.card__pinit--unpin').length).toBe(1)

    wrapper.find('.card__pinit--unpin').simulate('click');
    expect(wrapper.find('.card__pinit--unpin').length).toBe(0)
    expect(wrapper.find('.card__pinit--pin').length).toBe(1)
  });
});
