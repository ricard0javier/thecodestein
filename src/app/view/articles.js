import React, {PropTypes} from "react";
import Article from "./article";
import Dropzone from "react-dropzone";
import {Button, Col, Form, FormGroup} from "react-bootstrap";

const Articles = ({articles, isLoggedIn, addArticles, articleSaveHandler, authToken}) => {
  return (
    <div className="container">

      {/* Add article */}
      <ArticleDropzone addArticles={addArticles} isLoggedIn={isLoggedIn} articleSaveHandler={articleSaveHandler} authToken={authToken}/>

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
  articleSaveHandler: PropTypes.func,
  isLoggedIn: PropTypes.bool.isRequired,
  authToken: PropTypes.string
};

const ArticleDropzone = ({isLoggedIn, addArticles, articleSaveHandler, authToken}) => {
  if (!isLoggedIn) {
    return <span/>;
  }

  let contentNode = {};
  const handleContent = node => {
    contentNode = node;
  };

  const loadFileAsText = fileUploadedEvent => {
    const fileReader = new FileReader();
    fileReader.onload = event => {
      contentNode.value = event.target.result;
    };
    fileReader.readAsText(fileUploadedEvent[0], "UTF-8");
    addArticles();
  };

  const handleSave = event => {
    event.preventDefault();
    articleSaveHandler(authToken, contentNode.value);
  };

  return (
    <Form horizontal onSubmit={handleSave}>
      <div>
        <Dropzone className="dropzone text-center" activeClassName="dropzoneActive" onDrop={loadFileAsText} >
          <i className="fa fa-cloud-upload fa-3x"/>
          <br/>
          <span>Upload Article</span>
        </Dropzone>

        <textarea ref={handleContent} className="form-control" rows="10">{contentNode.value}</textarea>
      </div>

      <FormGroup>
        <Col smOffset={2} xs={10}>
          <Button type="submit">
            Save
          </Button>
        </Col>
      </FormGroup>
    </Form>
  );
};

ArticleDropzone.propTypes = {
  addArticles: PropTypes.func,
  articleSaveHandler: PropTypes.func,
  isLoggedIn: PropTypes.bool.isRequired,
  authToken: PropTypes.string
};

export default Articles;
