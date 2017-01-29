import React, {PropTypes} from "react";
import {Button} from "react-bootstrap";

const styles = {
  footer: {
    textAlign: 'center'
  }
};

/**
* Renders a Footer div element which contains:
* - The author name linking to the Linkedin profile
*/
const Footer = ({loginText, handleLogin}) => (
  <footer>
    {/* Signature */}
    <div className="row" style={styles.footer}>
      <span>Built by </span>
      <a target="_blank" href="https://uk.linkedin.com/in/ricardo-villanueva-12b73426" alt="Click to check my Linkedin profile!">
        <i className="fa fa-linkedin-square fa-2x">Ricardo Villanueva&nbsp;</i>
      </a>
    </div>

    {/* Follow me */}
    <div className="row">

      {/* Facebook */}
      <div className="col-xs-6 col-sm-3 text-center">
        <a target="_blank" href="https://www.facebook.com/ricardovz.me" alt="Click to check my Facebook profile!">
          <i className="fa fa-facebook-square">Facebook</i>
        </a>
      </div>

      {/* Twitter */}
      <div className="col-xs-6 col-sm-3 text-center">
        <a target="_blank" href="https://twitter.com/RicardoJavierVZ" alt="Click to check my Twitter profile!">
          <i className="fa fa-twitter-square">Twitter</i>
        </a>
      </div>

      {/* Instagram */}
      <div className="col-xs-6 col-sm-3 text-center">
        <a target="_blank" href="https://www.instagram.com/ricardovz_ldn/" alt="Click to check my Instagram profile!">
          <i className="fa fa-instagram">Instagram</i>
        </a>
      </div>

      {/* Linkedin */}
      <div className="col-xs-6 col-sm-3 text-center">
        <a target="_blank" href="https://uk.linkedin.com/in/ricardo-villanueva-12b73426" alt="Click to check my Linkedin profile!">
          <i className="fa fa-linkedin-square">Linkedin</i>
        </a>
      </div>
    </div>

    {/* Login */}
    <div>
      <Button className="center-block" bsStyle="primary" onClick={handleLogin}>{loginText}</Button>
    </div>
  </footer>
);

Footer.propTypes = {
  loginText: PropTypes.string,
  handleLogin: PropTypes.func.isRequired
};

export default Footer;
