import React from 'react';
import { shallow } from 'enzyme';

import Dashboard from './dashboard';

describe ('renders <Dashboard>', () => {
  describe ('no pinned movies', () => {

    it ('should display only the search bar', () => {
      const wrapper = shallow(<Dashboard/>);

      expect(wrapper.find('Menu').length).toBe(1);
      expect(wrapper.find('Search').length).toBe(1);
    });
  });

  describe ('with pinned movies', () => {
    it ('should display search bar and cards', () => {
      const movies = [{
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
      }];

      const wrapper = shallow(<Dashboard movies={movies}/>)

      expect(wrapper.find('Menu').length).toBe(1);
      expect(wrapper.find('Search').length).toBe(1);
      expect(wrapper.find('.container--deck').length).toBe(1);
      expect(wrapper.find('.container--deck').find('MovieCard').length).toBe(1);
    });
  });
});
