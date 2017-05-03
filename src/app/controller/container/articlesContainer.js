import {connect} from "react-redux";
import Articles from "../../view/articles";
import {articlesEditStart} from "../modules/articles";

// transforms the state to component properties
const mapStateToProps = state => {
  return {
    articlesList: state.articles.list,
    isLoggedIn: state.auth.tokenId !== ""
  };
};

// transform the dispatchers to component properties
const mapDispatchToProps = dispatch => {
  return {
    articlesEditStart: (content, fileName, isRef) => dispatch(articlesEditStart(content, fileName, isRef))
  };
};

const ArticlesContainer = connect(mapStateToProps, mapDispatchToProps)(Articles);

export default ArticlesContainer;
