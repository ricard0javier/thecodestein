import React, {Component} from 'react';
import {Header} from './header';
import {Footer} from './footer';

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

export class Container extends Component {
  render() {
    return (
      <div className="container" style={styles.container}>
        <Header/>
        {this.props.children}
        <Footer/>
      </div>
    );
  }
}

Container.propTypes = {
  children: React.PropTypes.object
};
