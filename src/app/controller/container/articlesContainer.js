import {connect} from "react-redux";
import Articles from "../../view/articles";
import {addArticles} from "../modules/articles";

// transforms the state to component properties
const mapStateToProps = state => {
  return {
    articles: state.articles,
    isLoggedIn: state.auth.tokenId !== ""
  };
};

// transform the dispatchers to component properties
const mapDispatchToProps = dispatch => {
  return {
    addArticles: () => {
      dispatch(addArticles());
    }
  };
};

const ArticlesContainer = connect(mapStateToProps, mapDispatchToProps)(Articles);

export default ArticlesContainer;
