import React from 'react';
import ReactDOM from 'react-dom';

import Landing from './views/landing';
import Search from './components/search';
import SignIn from './components/signin';
import Join from './components/join';
import Menu from './components/menu';
import MovieCard from './components/movie-card';
import MovieDetail from './components/movie-detail';

const render = (component) => {
  ReactDOM.render(
    component,
    document.getElementById('root')
  );
};

render(<Landing/>)
