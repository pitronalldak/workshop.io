import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { Router, browserHistory, hashHistory } from 'react-router';
import store from './store/store';
import routes from './routes/routes';
import './assets/_sass/index.scss';
import './assets/_sass/awesome/font-awesome.scss';

render(
  <Provider store={store}>
      <Router history={hashHistory} routes={routes} />
  </Provider>, document.getElementById('root')
);
