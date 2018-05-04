import React, {PropTypes} from "react";

const styles = {
  leftPanel: {
  }
};

const LeftPanel = ({isLoggedIn}) => {
  if (!isLoggedIn) {
    return <span/>;
  }
  return (
    <div style={styles.leftPanel}>
      <span>HELLO</span><br/>
      <span>World</span><br/>
      <span>HELLO</span><br/>
      <span>world</span><br/>
      <span>HELLO</span><br/>
      <span>HELLO</span><br/>
      <span>HELLO</span><br/>
      <span>HELLO</span><br/>
      <span>HELLO</span><br/>
      <span>HELLO</span><br/>
      <span>HELLO</span><br/>
    </div>
  );
};

LeftPanel.propTypes = {
  isLoggedIn: PropTypes.bool.isRequired
};

export default LeftPanel;
