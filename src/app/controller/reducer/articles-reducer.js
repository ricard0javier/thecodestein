import {REQUEST_ARTICLES, RECEIVE_ARTICLES} from "../action/articles-actions";

const articlesReducer = (state = [], action) => {
  switch (action.type) {

    case REQUEST_ARTICLES:
      return state;

    case RECEIVE_ARTICLES:
      return action.articles;

    default:
      return state;
  }
};

export default articlesReducer;
