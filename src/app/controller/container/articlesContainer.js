import {connect} from "react-redux";
import Articles from "../../view/articles";
import {addArticles, saveArticles} from "../modules/articles";

// transforms the state to component properties
const mapStateToProps = state => {
  return {
    articlesList: state.articles.list,
    isLoggedIn: state.auth.tokenId !== "",
    authToken: state.auth.tokenId
  };
};

// transform the dispatchers to component properties
const mapDispatchToProps = dispatch => {
  return {
    addArticles: () => {
      dispatch(addArticles());
    },
    articleSaveHandler: (authToken, content) => {
      dispatch(saveArticles(authToken, content));
    }
  };
};

const ArticlesContainer = connect(mapStateToProps, mapDispatchToProps)(Articles);

export default ArticlesContainer;
