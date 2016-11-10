import React, {Component} from 'react';
import {Router, Route, browserHistory, IndexRedirect} from 'react-router';
import {Provider} from 'react-redux';
import {createStore} from 'redux';

import Container from './container';
import Articles from './articles/articles';
import About from './about';
import Login from './views/Login';
import AuthService from './utils/AuthService';

// const auth = new AuthService(__AUTH0_CLIENT_ID__, __AUTH0_DOMAIN__);
const auth = new AuthService('35Fn4o16JWNyXaKVm4YJT2DL01qrSnF6', 'ricard0javier.eu.auth0.com');

// validate authentication for private routes
const requireAuth = (nextState, replace) => {
  if (auth.loggedIn()) {
    auth.logout();
  }
  console.log(auth.loggedIn());
  if (!auth.loggedIn()) {
    replace({pathname: '/login'});
  }
};

const login = () => {
  auth.login();
};

const reducers = (state = {}, action) => {
  switch (action.type) {

    case 'LOGIN':
      login();
      break;
    default:
      return {};
  }
};

const store = createStore(reducers);

const handleLogin = () => store.dispatch({type: 'LOGIN'});

export class Routes extends Component {
  render() {
    return (
      <Provider store={store}>
        <Router history={browserHistory}>
          <Route path="/" component={Container} auth={auth}>
            <IndexRedirect to="/articles"/>
            <Route path="articles" component={Articles} url="http://www.thecodestein.com/api/articles"/>
            <Route path="about" component={About} onEnter={requireAuth}/>
            <Route path="login" component={Login} handleLogin={handleLogin}/>
          </Route>
        </Router>
      </Provider>
    );
  }
}

export default Routes;
