import React, {PropTypes} from "react";
import Header from "./header";
import Footer from "../controller/container/footerContainer";

/**
* Describes the structure of the application in terms of components
*/
const Tiles = ({children}) => {
  return (
    <div className="container-fluid">
      <Header/>
      {children}
      <Footer/>
    </div>
  );
};

Tiles.propTypes = {
  children: PropTypes.object.isRequired
};

export default Tiles;
