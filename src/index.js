import React from 'react';
import ReactDOM from 'react-dom';

import Search from './components/search';

const render = (component) => {
  console.log(component)
  ReactDOM.render(
    <Search/>,
    document.getElementById('root')
  );
};

render(Search)
