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
});
