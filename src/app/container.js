import React, {PropTypes} from 'react';

import Header from './header';
import Footer from './footer';

const styles = {
  container: {
    display: 'flex',
    flexDirection: 'column',
    minHeight: '100%'
  },
  main: {
    flex: 1,
    display: 'flex',
    flexDirection: 'column'
  }
};

const Container = props => (
  <div className="container" style={styles.container}>
    <Header/>
    {props.children}
    <Footer/>
  </div>
);

Container.propTypes = {
  props: PropTypes.object,
  children: PropTypes.object
};

export default Container;
