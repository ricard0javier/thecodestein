import React, {PropTypes} from "react";
import "../configuration/markedConfiguration";

/* eslint-disable react/no-danger */
const Article = ({isLoggedIn, url, content, articlesEditStart}) => {
  // let content = "<i class='fa fa-spinner fa-spin'></i><span> Loading...</span>";
  const handleEdit = () => {
    articlesEditStart(url, null, true);
  };

  return (
    <div>
      {isLoggedIn &&
        <a onClick={handleEdit}>
          <i className="pull-right fa fa-edit"/>
        </a>
      }
      <div className="alpha-div" dangerouslySetInnerHTML={{__html: content}}/>
    </div>
  );
};
/* eslint-enable react/no-danger */

Article.propTypes = {
  isLoggedIn: PropTypes.bool.isRequired,
  url: PropTypes.string.isRequired,
  content: PropTypes.string.isRequired,
  articlesEditStart: PropTypes.func.isRequired
};

export default Article;
