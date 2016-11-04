import React, {Component} from 'react';
import {Router, Route, browserHistory, IndexRedirect} from 'react-router';

import {Container} from './container';
import {Articles} from './articles/articles';
import {About} from './about';
import {Login} from './views/Login';
import AuthService from './utils/AuthService';

// const auth = new AuthService(__AUTH0_CLIENT_ID__, __AUTH0_DOMAIN__);
const auth = new AuthService('35Fn4o16JWNyXaKVm4YJT2DL01qrSnF6', 'ricard0javier.eu.auth0.com');

// validate authentication for private routes
const requireAuth = (nextState, replace) => {
  if (!auth.loggedIn()) {
    replace({pathname: '/login'});
  }
};

export class Routes extends Component {
  render() {
    return (
      <Router history={browserHistory}>
        <Route path="/" component={Container} auth={auth}>
          <IndexRedirect to="/articles"/>
          <Route path="articles" component={Articles} url="http://www.thecodestein.com/api/articles"/>
          <Route path="about" component={About} onEnter={requireAuth}/>
          <Route path="login" component={Login} auth={auth}/>
        </Route>
      </Router>
    );
  }
}
