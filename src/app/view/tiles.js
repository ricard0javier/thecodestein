import React, {PropTypes} from "react";
import Header from "./header";
import Footer from "../controller/container/footerContainer";
import DevTools from "../controller/container/devToolsContainer";
import LeftPanel from "../controller/container/leftPanelContainer";
import {Grid, Row, Col} from "react-bootstrap";

const conf = {
  style: {

    height: "100%", /* Full-height: remove this if you want "auto" height */
    backgroundColor: 'rgba(31, 46, 62, 0.901961)'

  }
};

/**
* Describes the structure of the application in terms of components
*/
const Tiles = ({children}) => {
  return (
    <div>
      <Grid fluid>
        <Row>
          <Col>
            <Header/>
          </Col>
        </Row>
        <Row>
          <Col xs={1} style={conf.style}>
            <LeftPanel/>
          </Col>
          <Col xs={9}>
            {children}
            <DevTools/>
          </Col>
        </Row>
        <Row>
          <Col>
            <Footer/>
          </Col>
        </Row>
      </Grid>
    </div>
  );
};

Tiles.propTypes = {
  children: PropTypes.object.isRequired
};

export default Tiles;
