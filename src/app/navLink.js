import React, {Component} from 'react';
import {Link} from 'react-router';

export class NavLink extends Component {
  render() {
    return (
      <Link {...this.props} activeStyle={{color: 'cyan'}}/>
    );
  }
}
