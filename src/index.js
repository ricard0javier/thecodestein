import 'babel-polyfill';

import React from 'react';
import ReactDOM from 'react-dom';
import {Router, Route, browserHistory, IndexRoute} from 'react-router';

import {Container} from './app/container';
import {Articles} from './app/articles/articles';
import {About} from './app/about';

import './index.scss';

require('./app/configuration/markedConfiguration');
require('./app/configuration/prismConfiguration');

ReactDOM.render(
  <Router history={browserHistory}>
    <Route path="/" component={Container}>
      <IndexRoute component={Articles}/>
      <Route path="/articles" component={Articles} url="http://www.thecodestein.com/api/articles"/>
      <Route path="/about" component={About}/>
    </Route>
  </Router>,
  document.getElementById('root')
);
