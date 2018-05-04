import {connect} from "react-redux";
import DevTools from "../../view/devTools";
import {loggedInAuth} from "../../controller/modules/auth";

// transforms the state to component properties
const mapStateToProps = state => {
  return {
    isLoggedIn: state.auth.tokenId !== ""
  };
};

const mapDispatchToProps = dispatch => {
  return {
    handleLogin: () => dispatch(loggedInAuth('mocked_auth_token'))
  };
};

const DevToolsContainer = connect(mapStateToProps, mapDispatchToProps)(DevTools);

export default DevToolsContainer;
