import axios from "axios";
import marked from "marked";
import CONFIG from "../../configuration/appConfiguration.js";

// Actions
const RECEIVE_ARTICLES = 'app/articles/RECEIVE_ARTICLES';

// const LOAD = 'app/members/LOAD';
// const LOAD_SUCCESS = 'app/members/LOAD_SUCCESS';
// const LOAD_FAIL = 'app/members/LOAD_FAIL';
const EDIT_START = 'app/members/EDIT_START';
const EDIT_STOP = 'app/members/EDIT_STOP';
// const ARTICLES_SAVE = 'app/articles/SAVE';
const ARTICLES_SAVE_SUCCESS = 'app/articles/SAVE_SUCCESS';
// const SAVE_FAIL = 'app/members/SAVE_FAIL';
// const DELETE = 'app/members/DELETE';
// const DELETE_SUCCESS = 'app/members/DELETE_SUCCESS';
// const DELETE_FAIL = 'app/members/DELETE_FAIL';

// Reducers
const articlesReducer = (state = {list: [], editStarted: false}, action) => {
  switch (action.type) {

    case RECEIVE_ARTICLES:
      return {...state, list: action.articles};

    case EDIT_START:
      return {...state, editStarted: action.value, contentToEdit: action.content};

    case EDIT_STOP:
      return {...state, editStarted: action.value, contentToEdit: undefined};

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

export function articlesSaveSuccess() {
  return {
    type: ARTICLES_SAVE_SUCCESS
  };
}
export function articlesEditStart(content) {
  return {
    type: EDIT_START,
    value: true,
    content
  };
}
export function articlesEditStop() {
  return {
    type: EDIT_STOP,
    value: false
  };
}

export const fetchArticles = () => dispatch => {
  axios
    .get(CONFIG.api.articles.list)
    .then(response => {
      const articleRequestList = response.data.map(url => axios.get(url));
      axios.all(articleRequestList)
        .then(axios.spread((...articleResponseList) => {
          const articleContentList = articleResponseList.map(response => marked(response.data));
          dispatch(receiveArticles(articleContentList));
        }));
    });
};

export const saveArticles = (authToken, content, title) => dispatch => {
  // removed special characters
  let normalisedTitle = title.replace(/[^a-zA-Z0-9 ]/g, "");

  // replace the the space by underscores
  normalisedTitle = normalisedTitle.replace(/ /g, "_");

  const data = {
    token: `${authToken}`,
    bucket: CONFIG.api.articles.add.bucket,
    key: `${CONFIG.api.articles.add.prefix}${normalisedTitle}`,
    body: `${content}`
  };

  axios
    .post(CONFIG.api.articles.add.url, data)
    .then(() => dispatch(articlesSaveSuccess))
    .then(() => dispatch(articlesEditStop));
};

export default articlesReducer;
