import React, {Component, PropTypes} from 'react';
import {ButtonToolbar, Button} from 'react-bootstrap';
import AuthService from '../utils/AuthService';

export class Login extends Component {
  constructor() {
    super();

    const {auth} = this.props;
    this.handleLogin = auth.login.bind(this);
  }

  render() {
    return (
      <div>
        <h2>Login</h2>
        <ButtonToolbar>
          <Button bsStyle="primary" onClick={this.handleLogin}>Login</Button>
        </ButtonToolbar>
      </div>
    );
  }
}

Login.propTypes = {
  location: PropTypes.object,
  auth: PropTypes.instanceOf(AuthService)
};
