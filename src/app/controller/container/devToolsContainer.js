import {connect} from "react-redux";
import DevTools from "../../view/devTools";
import {loggedInAuth} from "../../controller/modules/auth";

const mapDispatchToProps = dispatch => {
  return {
    handleLogin: () => dispatch(loggedInAuth('mocked_auth_token'))
  };
};

const DevToolsContainer = connect(null, mapDispatchToProps)(DevTools);

export default DevToolsContainer;
