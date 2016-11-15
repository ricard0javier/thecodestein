import React, {PropTypes} from "react";
import Article from "./article";

const Articles = ({articles}) => (
  <div>
    {articles.map(articleUrl => (
      <Article key={articleUrl} url={articleUrl}/>
    ))}
  </div>
);

Articles.propTypes = {
  articles: PropTypes.array.isRequired
};

export default Articles;
