import {connect} from "react-redux";
import ArticleUploader from "../../view/articleUploader";
import {saveArticles, articlesEditStart} from "../modules/articles";

// transforms the state to component properties
const mapStateToProps = state => {
  return {
    isLoggedIn: state.auth.tokenId !== "",
    authToken: state.auth.tokenId,
    hasStarted: state.articles.editStarted,
    contentToEdit: state.articles.contentToEdit
  };
};

// transform the dispatchers to component properties
const mapDispatchToProps = dispatch => {
  return {
    saveArticles: (authToken, content, title) => dispatch(saveArticles(authToken, content, title)),
    articlesEditStart: content => dispatch(articlesEditStart(content))
  };
};

const ArticleUploaderContainer = connect(mapStateToProps, mapDispatchToProps)(ArticleUploader);

export default ArticleUploaderContainer;
