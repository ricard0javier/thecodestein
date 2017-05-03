import React, {PropTypes} from "react";
import {Button, Form, FormGroup} from "react-bootstrap";

const ArticleListManager = ({isLoggedIn, articleListUrl, fileName, articlesEditStart}) => {
  if (!isLoggedIn) {
    return <span/>;
  }

  const handleChange = event => {
    event.preventDefault();
    articlesEditStart(articleListUrl, fileName, true);
  };

  return (
    <div>
      <Form horizontal>
        <FormGroup>
          <Button className="pull-right" bsStyle="primary" onClick={handleChange}>Change Articles</Button>
        </FormGroup>
      </Form>
    </div>
  );
};

ArticleListManager.propTypes = {
  isLoggedIn: PropTypes.bool.isRequired,
  fileName: PropTypes.string.isRequired,
  articleListUrl: PropTypes.string.isRequired,
  articlesEditStart: PropTypes.func.isRequired
};

export default ArticleListManager;
