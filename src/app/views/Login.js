import React, {Component, PropTypes} from 'react';
import {ButtonToolbar, Button} from 'react-bootstrap';

export class Login extends Component {
  componentDidMount() {
    this.handleLogin = this.props.route.auth.login.bind(this);
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
  route: PropTypes.object.isRequired
};
