import {connect} from "react-redux";

import LeftPanelComponent from "../../view/LeftPanel";

// transforms the state to component properties
const mapStateToProps = state => {
  return {
    isLoggedIn: state.auth.tokenId !== ""
  };
};

const LeftPanelContainer = connect(mapStateToProps)(LeftPanelComponent);

export default LeftPanelContainer;
