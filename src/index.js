import 'babel-polyfill';

import React from 'react';
import ReactDOM from 'react-dom';
import {Router, Route, browserHistory} from 'react-router';

import {Main} from './app/main';

import '../node_modules/font-awesome/scss/font-awesome.scss';
import '../node_modules/bootstrap/dist/css/bootstrap.css';
import './index.scss';

ReactDOM.render(
  <Router history={browserHistory}>
    <Route path="/" component={Main}/>
  </Router>,
  document.getElementById('root')
);
