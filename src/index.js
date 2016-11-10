import 'babel-polyfill';
import React from 'react';
import ReactDOM from 'react-dom';

import Routes from './app/routes';

import './index.scss';

/*
* Substitutes the DOM element with id='root' with the React component 'Routes'
*/
ReactDOM.render(
  <Routes/>,
  document.getElementById('root')
);
