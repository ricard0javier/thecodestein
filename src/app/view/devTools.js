import React, {PropTypes} from "react";
import {Button} from "react-bootstrap";
const DevTools = ({handleLogin}) => {
  if (process.env.NODE_ENV === 'production') {
    return <span/>;
  }
  return (
    <div className="dev-tools">
      <h3>[Dev Tools]</h3>
      <div>
        <Button bsStyle="primary" onClick={handleLogin}>Simulate Login</Button>
      </div>
    </div>
  );
};

DevTools.propTypes = {
  handleLogin: PropTypes.func.isRequired
};

export default DevTools;
