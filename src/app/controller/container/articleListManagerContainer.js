import {connect} from "react-redux";
import ArticleListManager from "../../view/articleListManager";
import {articlesEditStart} from "../modules/articles";
import CONFIG from "../../configuration/appConfiguration.js";

// transforms the state to component properties
const mapStateToProps = state => {
  const articleListUrl = CONFIG.api.articles.listPrefix + CONFIG.api.articles.listFileName;
  return {
    isLoggedIn: state.auth.tokenId !== "",
    fileName: CONFIG.api.articles.listFileName,
    articleListUrl
  };
};

// transform the dispatchers to component properties
const mapDispatchToProps = dispatch => {
  return {
    articlesEditStart: (content, fileName, isRef) => dispatch(articlesEditStart(content, fileName, isRef))
  };
};

const ArticleListManagerContainer = connect(mapStateToProps, mapDispatchToProps)(ArticleListManager);

export default ArticleListManagerContainer;
