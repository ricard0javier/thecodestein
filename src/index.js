import 'babel-polyfill';

import React from 'react';
import ReactDOM from 'react-dom';

import {Routes} from './app/routes';

import './index.scss';

import './app/configuration/markedConfiguration';
import './app/configuration/prismConfiguration';

ReactDOM.render(
  <Routes/>,
  document.getElementById('root')
);
