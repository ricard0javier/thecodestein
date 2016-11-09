import React, {PropTypes} from 'react';
import {Link} from 'react-router';

const NavLink = ({to}) => (
  <Link to={to} activeStyle={{color: 'cyan'}}/>
);

NavLink.propTypes = {
  to: PropTypes.string.isRequired
};

export default NavLink;
