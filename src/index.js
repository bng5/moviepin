import React from 'react';
import ReactDOM from 'react-dom';

import Landing from './views/landing';
import Dashboard from './views/dashboard';

import Styles from './styles/main.scss';

const movies = [
  {
    id: 1,
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
  },
  {
    id: 2,
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
  }
];

const render = (component) => {
  ReactDOM.render(
    component,
    document.getElementById('root')
  );
};

render(<Dashboard movies={[]}/>)
// render(<Landing/>)
