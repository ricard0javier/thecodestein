import React, {PropTypes} from "react";
import Article from "./article";
import Dropzone from "react-dropzone";

const Articles = ({articles, isLoggedIn, addArticles}) => {
  return (
    <div className="container">

      <ArticleDropzone addArticles={addArticles} isLoggedIn={isLoggedIn}/>

      {/* Add article */}
      <div className="pull-right">
        {isLoggedIn && <a onClick={addArticles}><i className="fa fa-plus">Add Article</i></a>}
      </div>

      {/* Articles */}
      <div>
        {articles.map((articleContent, index) => (
          <Article key={index} content={articleContent}/>
        ))}
      </div>

    </div>
  );
};

Articles.propTypes = {
  articles: PropTypes.array.isRequired,
  addArticles: PropTypes.func,
  isLoggedIn: PropTypes.bool.isRequired
};

const ArticleDropzone = ({isLoggedIn, addArticles}) => {
  if (!isLoggedIn) {
    return <span/>;
  }
  return (
    <Dropzone className="dropzone text-center" activeClassName="dropzoneActive" onDrop={addArticles}>
      <i className="fa fa-cloud-upload fa-3x"/>
      <br/>
      <span>Upload Article</span>
    </Dropzone>
  );
};

ArticleDropzone.propTypes = {
  addArticles: PropTypes.func,
  isLoggedIn: PropTypes.bool.isRequired
};

export default Articles;
