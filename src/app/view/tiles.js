import React, {PropTypes} from "react";
import Header from "./header";
import Footer from "../controller/container/footerContainer";
import DevTools from "../controller/container/devToolsContainer";

/**
* Describes the structure of the application in terms of components
*/
const Tiles = ({children}) => {
  return (
    <div>
      <Header/>
      {children}
      <DevTools/>
      <Footer/>
    </div>
  );
};

Tiles.propTypes = {
  children: PropTypes.object.isRequired
};

export default Tiles;
