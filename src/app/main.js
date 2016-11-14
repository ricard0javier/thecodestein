import React from "react";
import {Router, Route, browserHistory, IndexRedirect} from "react-router";
import {Provider} from "react-redux";
import {createStore, applyMiddleware} from "redux";
import thunk from "redux-thunk";
import newAuth0Lock, {handleLogin, registerLoggedInListener} from "./utils/auth-service";
import About from "./view/about";
import Articles from "./articles/articles";
import reducers from "./controller/reducer";
import {handleLoggedIn} from "./controller/action/auth-actions";
import TilesContainer from "./controller/container/tiles-container";
import UserInfoContainer from "./controller/container/user-info-container";

// define the package constants
const __AUTH0_CLIENT_ID__ = '35Fn4o16JWNyXaKVm4YJT2DL01qrSnF6';
const __AUTH0_DOMAIN__ = 'ricard0javier.eu.auth0.com';

const store = createStore(
  reducers,
  applyMiddleware(thunk)
);
const auth0Lock = newAuth0Lock(__AUTH0_CLIENT_ID__, __AUTH0_DOMAIN__);

// associate the store dispatch with the logged in event
const loggedInListener = idToken => store.dispatch(handleLoggedIn(idToken));
registerLoggedInListener(auth0Lock, loggedInListener);

// validate authentication for private routes
const requireAuth = (nextState, replace) => {
  if (!store.getState().auth.token) {
    replace({pathname: '/user'});
  }
};

/**
* Configures the application with:
* - Redux (<Provider/>)
* - React Router (<Router/>)
*/
const Main = () => (
  <Provider store={store}>
    <Router history={browserHistory}>
      <Route path="/" component={TilesContainer}>
        <IndexRedirect to="/articles"/>
        <Route path="articles" component={Articles} url="http://www.thecodestein.com/api/articles"/>
        <Route path="about" component={About} onEnter={requireAuth}/>
        <Route path="user" component={UserInfoContainer} handleLogin={handleLogin(auth0Lock)}/>
      </Route>
    </Router>
  </Provider>
);

export default Main;
