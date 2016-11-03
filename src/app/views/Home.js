import React, {Component} from 'react';
import {Header} from '../header';
import {Footer} from '../footer';
import {Articles} from '../articles/articles';

require('../configuration/markedConfiguration');
require('../configuration/prismConfiguration');

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

export class Home extends Component {
  render() {
    return (
      <div style={styles.container}>
        <Header/>
        <main className="container" style={styles.main}>
          <Articles url="http://www.thecodestein.com/api/articles"/>
        </main>
        <Footer/>
      </div>
    );
  }
}
