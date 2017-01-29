import React from "react";
import {Router, Route, browserHistory, IndexRedirect} from "react-router";
import {Provider} from "react-redux";
import {createStore, applyMiddleware} from "redux";
import thunk from "redux-thunk";
import reducers from "./controller/modules/reducer";
import {fetchArticles} from "./controller/modules/articles";
import ArticlesContainer from "./controller/container/articlesContainer";
import TilesContainer from "./controller/container/tilesContainer";
import {loggedInAuth, loggedOutAuth} from "./controller/modules/auth";
import {getInstance as initialiseAuth} from "./utils/auth-service";
import {composeWithDevTools} from 'remote-redux-devtools';

const store = createStore(reducers, composeWithDevTools(
  applyMiddleware(thunk))
);

// initialise authentication mechanism
const loginHandler = tokenId => store.dispatch(loggedInAuth(tokenId));
const logoutHandler = () => store.dispatch(loggedOutAuth());
initialiseAuth(loginHandler, logoutHandler);

const initialiseArticles = () => store.dispatch(fetchArticles());

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
        <Route path="articles" component={ArticlesContainer} onEnter={initialiseArticles}/>
      </Route>
    </Router>
  </Provider>
);

export default Main;
