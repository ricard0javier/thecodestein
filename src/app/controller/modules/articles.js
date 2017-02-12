import axios from "axios";
import marked from "marked";

// Actions
const RECEIVE_ARTICLES = 'app/articles/RECEIVE_ARTICLES';
const ADD_ARTICLES = 'app/articles/ADD_ARTICLES';

// const LOAD = 'app/members/LOAD';
// const LOAD_SUCCESS = 'app/members/LOAD_SUCCESS';
// const LOAD_FAIL = 'app/members/LOAD_FAIL';
// const EDIT_START = 'app/members/EDIT_START';
// const EDIT_STOP = 'app/members/EDIT_STOP';
// const ARTICLES_SAVE = 'app/articles/SAVE';
const ARTICLES_SAVE_SUCCESS = 'app/articles/SAVE_SUCCESS';
// const SAVE_FAIL = 'app/members/SAVE_FAIL';
// const DELETE = 'app/members/DELETE';
// const DELETE_SUCCESS = 'app/members/DELETE_SUCCESS';
// const DELETE_FAIL = 'app/members/DELETE_FAIL';

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
export function articlesSaveSuccess() {
  return {
    type: ARTICLES_SAVE_SUCCESS
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

export const saveArticles = (authToken, content) => dispatch => {
  let SAVE_ARTICLES_URL = "https://api.ricardovz.com/prod/ricardovz_uploader";
  if (process.env.NODE_ENV !== 'production') {
    SAVE_ARTICLES_URL = "https://pxgzx41l7b.execute-api.eu-central-1.amazonaws.com/prod/ricardovz_uploader";
  }
  const data = {
    token: `${authToken}`,
    bucket: "static.ricardovz.com",
    key: "data/test2.json",
    body: `${content}`
  };

  axios
    .post(SAVE_ARTICLES_URL, data)
    .then(response => console.log(response))
    .then(() => dispatch(articlesSaveSuccess));
};

export default articlesReducer;
