import React, {PropTypes} from "react";
import {Button} from "react-bootstrap";
const DevTools = ({isLoggedIn, handleLogin}) => {
  if (process.env.NODE_ENV === 'production') {
    return <span/>;
  }
  return (
    <div className="dev-tools">
      <h3>[Dev Tools]</h3>
      <div>
        {!isLoggedIn &&
          <Button bsStyle="primary" onClick={handleLogin}>Simulate Login</Button>
        }
      </div>
    </div>
  );
};

DevTools.propTypes = {
  isLoggedIn: PropTypes.bool.isRequired,
  handleLogin: PropTypes.func.isRequired
};

export default DevTools;
