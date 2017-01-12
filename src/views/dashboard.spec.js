import React from 'react';
import { shallow } from 'enzyme';

import MoviesMock from '../mocks/movies';

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
    let wrapper;

    beforeEach(() => {
      wrapper = shallow(<Dashboard movies={MoviesMock}/>);
    });

    it ('should display search bar and cards', () => {
      expect(wrapper.find('Menu').length).toBe(1);
      expect(wrapper.find('Search').length).toBe(1);
      expect(wrapper.find('MovieDeck').length).toBe(1);
    });

    it ('should show card detail on demand', () => {
      const movieDeck = wrapper.find('MovieDeck').dive();
      const movieCard = movieDeck.find('MovieCard').first().dive();

      movieCard.find('.card.card--poster').simulate('click');

      expect(movieDeck.find('MovieDetail')
                      .length).toBe(1);
    });
  });
});
