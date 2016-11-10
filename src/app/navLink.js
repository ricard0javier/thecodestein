import React, {Component} from 'react';
import {Link} from 'react-router';

/*
* Renders a Link element which is colored to 'cyan' when the Link is active
*/
export class NavLink extends Component {
  render() {
    return (
      <Link {...this.props} activeStyle={{color: 'cyan'}}/>
    );
  }
}

export default NavLink;
