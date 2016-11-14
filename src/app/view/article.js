import React, {PropTypes} from "react";
import axios from "axios";
import marked from "marked";
import "../configuration/markedConfiguration";

/* eslint-disable react/no-danger */
const Article = url => {
  let content = "<i class='fa fa-spinner fa-spin'></i><span> Loading...</span>";

  axios
    .get(url)
    .then(response => {
      content = marked(response.data);
    });

  return (
    <div className="alpha-div" dangerouslySetInnerHTML={{__html: content}}/>
  );
};
/* eslint-enable react/no-danger */

Article.propTypes = {
  url: PropTypes.string.isRequired
};

export default Article;
