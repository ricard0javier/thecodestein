import React, {PropTypes} from 'react';
import axios from 'axios';
import {Article} from './article';

const Articles = ({route: {url}}) => {
  let articleUrls = [];

  axios
    .get(url)
    .then(response => {
      articleUrls = response.data;
    });

  return (
    <div>
      {articleUrls.map(articleUrl => (
        <Article key={articleUrl} url={articleUrl}/>
      ))}
    </div>
  );
};

Articles.propTypes = {
  route: PropTypes.object.isRequired
};

export default Articles;
