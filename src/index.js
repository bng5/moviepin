import React from 'react';
import ReactDOM from 'react-dom';

import Search from './components/search';
import SignIn from './components/signin';
import Join from './components/join';

const render = (component) => {
  ReactDOM.render(
    component,
    document.getElementById('root')
  );
};

render(<Join/>)
