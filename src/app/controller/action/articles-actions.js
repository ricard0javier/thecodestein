import {axios} from "axios";

const API_ARTICLES_URL = "http://www.thecodestein.com/api/articles;";

export const RECEIVE_ARTICLES = 'RECEIVE_ARTICLES';
export function receiveArticles(articles) {
  return {
    type: RECEIVE_ARTICLES,
    articles
  };
}

export const REQUEST_ARTICLES = 'REQUEST_ARTICLES';
export const handleArticlesRequest = () => dispatch => {
  axios
    .get(API_ARTICLES_URL)
    .then(response => dispatch(receiveArticles(response.data)));
};
