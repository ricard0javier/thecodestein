import React, {Component} from 'react';
import {Router, Route, browserHistory, IndexRoute} from 'react-router';

import {Container} from './container';
import {Articles} from './articles/articles';
import {About} from './about';

export class Routes extends Component {
  render() {
    return (
      <Router history={browserHistory}>
        <Route path="/" component={Container}>
          <IndexRoute component={Articles}/>
          <Route path="/articles" component={Articles} url="http://www.thecodestein.com/api/articles"/>
          <Route path="/about" component={About}/>
        </Route>
      </Router>
    );
  }
}
