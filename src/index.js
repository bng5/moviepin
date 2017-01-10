import React from 'react';
import ReactDOM from 'react-dom';

import Landing from './views/landing';
import Dashboard from './views/dashboard';

import Styles from './styles/main.scss';

const render = (component) => {
  ReactDOM.render(
    component,
    document.getElementById('root')
  );
};

render(<Dashboard/>)
