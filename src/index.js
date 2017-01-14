import React from 'react';
import ReactDOM from 'react-dom';

import Landing from './views/landing';

import Styles from './styles/main.scss';

import MoviesMock from './mocks/movies';

import MainLayout from './views/main-layout';

const render = (component) => {
  ReactDOM.render(
    component,
    document.getElementById('root')
  );
};

render(<MainLayout movies={MoviesMock}/>)
// render(<Landing/>)
