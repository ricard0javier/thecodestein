import React, {PropTypes} from "react";
import Dropzone from "react-dropzone";
import {Button, Form, FormGroup, InputGroup, FormControl, ControlLabel, Col} from "react-bootstrap";

const ArticleUploader = ({isLoggedIn, authToken, hasStarted, saveArticles, articlesEditStart, contentToEdit, fileName}) => {
  if (!isLoggedIn) {
    return <span/>;
  }

  let contentNode = {};
  const handleContent = node => {
    contentNode = node;
  };

  let fileNameNode = {};
  const handleFileName = node => {
    fileNameNode = node;
  };

  const loadFileAsText = fileUploadedEvent => {
    const fileReader = new FileReader();
    fileReader.onload = event => {
      articlesEditStart(event.target.result);
    };
    fileReader.readAsText(fileUploadedEvent[0], "UTF-8");
  };

  const handleSave = event => {
    event.preventDefault();
    saveArticles(authToken, contentNode.value, fileNameNode.value);
  };

  return (
    <div>
      {!hasStarted &&
        <Dropzone className="dropzone text-center" activeClassName="dropzoneActive" onDrop={loadFileAsText} >
          <i className="fa fa-cloud-upload fa-3x"/>
          <br/>
          <span>Upload Article</span>
        </Dropzone>
      }
      {hasStarted &&
        <Form horizontal onSubmit={handleSave}>
          {/* title input */}
          <FormGroup>
            <InputGroup>
              <InputGroup.Addon>File Name</InputGroup.Addon>
              <FormControl inputRef={handleFileName} type="text" defaultValue={fileName}/>
            </InputGroup>
          </FormGroup>

          {/* text input */}
          <FormGroup controlId="formControlsTextarea">
            <ControlLabel>Content</ControlLabel>
            <FormControl inputRef={handleContent} componentClass="textarea" defaultValue={contentToEdit} rows="12"/>
          </FormGroup>

          {/* save button */}
          <FormGroup>
            <Col smOffset={2} sm={10}>
              <Button type="submit" className="pull-right">Save</Button>
            </Col>
          </FormGroup>

        </Form>
      }
    </div>
  );
};

ArticleUploader.propTypes = {
  isLoggedIn: PropTypes.bool.isRequired,
  authToken: PropTypes.string.isRequired,
  hasStarted: PropTypes.bool.isRequired,
  saveArticles: PropTypes.func.isRequired,
  articlesEditStart: PropTypes.func.isRequired,
  fileName: PropTypes.string,
  contentToEdit: PropTypes.string
};

export default ArticleUploader;
