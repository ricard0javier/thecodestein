import React from "react";
import {Router, Route, browserHistory, IndexRedirect} from "react-router";
import {Provider} from "react-redux";
import {createStore, applyMiddleware} from "redux";
import thunk from "redux-thunk";
import About from "./view/about";
import reducers from "./controller/reducer";
import {fetchArticles} from "./controller/action/articles-actions";
import ArticlesContainer from "./controller/container/articles-container";
import TilesContainer from "./controller/container/tilesContainer";
import {loggedInAuth, loggedOutAuth} from "./controller/modules/auth";
import {getInstance as initialiseAuth} from "./utils/auth-service";

const store = createStore(reducers, applyMiddleware(thunk));

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
        <Route path="about" component={About}/>
      </Route>
    </Router>
  </Provider>
);

export default Main;
