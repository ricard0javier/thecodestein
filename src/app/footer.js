import React, {Component} from 'react';

const styles = {
  footer: {
    padding: '0.5rem',
    fontSize: '1rem',
    backgroundColor: '#1f1f1f',
    textAlign: 'center',
    color: 'white'
  }
};

export class Footer extends Component {
  render() {
    return (
      <footer style={styles.footer}>
        Built by &nbsp;
        <a target="_blank" href="https://uk.linkedin.com/in/ricardo-villanueva-12b73426">
          Ricardo Villanueva
        </a>
      </footer>
    );
  }
}
