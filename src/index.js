import React from 'react';
import ReactDOM from 'react-dom';

import Landing from './views/landing';
import Dashboard from './views/dashboard';

import Styles from './styles/main.scss';

import MoviesMock from './mocks/movies';

const render = (component) => {
  ReactDOM.render(
    component,
    document.getElementById('root')
  );
};

// render(<Dashboard movies={[]}/>)
render(<Dashboard movies={MoviesMock}/>)
// render(<Landing/>)
