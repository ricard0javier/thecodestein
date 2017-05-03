import React, {PropTypes} from "react";
import Article from "./article";
import ArticleUploader from "../controller/container/articleUploaderContainer";
import ArticleListManager from "../controller/container/articleListManagerContainer";

const Articles = ({articlesList, isLoggedIn, articlesEditStart}) => {
  return (
    <div className="container bodyContainer">

      {/* Configure first page */}
      <ArticleListManager/>

      {/* Add article */}
      <ArticleUploader/>

      {/* Articles */}
      <div>
        {articlesList.map((article, index) => (
          <Article key={index} content={article.content} isLoggedIn={isLoggedIn} url={article.url} articlesEditStart={articlesEditStart}/>
        ))}
      </div>

    </div>
  );
};

Articles.propTypes = {
  articlesList: PropTypes.array.isRequired,
  isLoggedIn: PropTypes.bool.isRequired,
  articlesEditStart: PropTypes.func.isRequired
};

export default Articles;
