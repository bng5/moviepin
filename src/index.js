import React from 'react';
import ReactDOM from 'react-dom';

import Styles from './styles/main.scss';

import MainLayout from './views/main-layout';

const render = (component) => {
  ReactDOM.render(
    component,
    document.getElementById('root')
  );
};

render(<MainLayout/>)
// render(<Landing/>)
