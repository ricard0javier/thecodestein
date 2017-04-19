import React, {PropTypes} from "react";
import Article from "./article";
import ArticleUploader from "../controller/container/articleUploaderContainer";

const Articles = ({articlesList}) => {
  return (
    <div className="container bodyContainer">

      {/* Add article */}
      <ArticleUploader/>

      {/* Articles */}
      <div>
        {articlesList.map((articleContent, index) => (
          <Article key={index} content={articleContent}/>
        ))}
      </div>

    </div>
  );
};

Articles.propTypes = {
  articlesList: PropTypes.array.isRequired,
  addArticles: PropTypes.func,
  articleSaveHandler: PropTypes.func,
  isLoggedIn: PropTypes.bool.isRequired,
  authToken: PropTypes.string
};

export default Articles;
