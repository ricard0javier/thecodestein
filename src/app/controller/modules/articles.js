import axios from "axios";
import marked from "marked";

// Actions
const RECEIVE_ARTICLES = 'app/articles/RECEIVE_ARTICLES';
const ADD_ARTICLES = 'app/articles/ADD_ARTICLES';

// Reducers
const articlesReducer = (state = [], action) => {
  switch (action.type) {

    case RECEIVE_ARTICLES:
      return action.articles;

    default:
      return state;
  }
};

// Action Creators
export function receiveArticles(articles) {
  return {
    type: RECEIVE_ARTICLES,
    articles
  };
}

export function addArticles() {
  return {
    type: ADD_ARTICLES
  };
}

export const fetchArticles = () => dispatch => {
  const API_ARTICLES_URL = "//www.thecodestein.com/api/articles";
  axios
    .get(API_ARTICLES_URL)
    .then(response => {
      const articleRequestList = response.data.map(url => axios.get(url));
      axios.all(articleRequestList)
        .then(axios.spread((...articleResponseList) => {
          const articleContentList = articleResponseList.map(response => marked(response.data));
          dispatch(receiveArticles(articleContentList));
        }));
    });
};

export default articlesReducer;
