import React from 'react';
import ReactDOM from 'react-dom';

import { createStore } from 'redux';
import { Provider } from 'react-redux';

import reducer from './reducers/index';

import MoviepinIco from './images/moviepin.ico';
import Styles from './styles/main.scss';
import Index from './index.html';

import MainLayout from './views/main-layout';

const store = createStore(reducer);

const render = () => {
  ReactDOM.render(
    <Provider store={store}>
      <MainLayout/>
    </Provider>,
    document.getElementById('root')
  );
};

render();
