const FooterStyles = {
  footer: {
    padding: '0.5rem',
    fontSize: '1rem',
    backgroundColor: '#1f1f1f',
    textAlign: 'center',
    color: 'white'
  }
};

class Footer extends React.Component {
  render() {
    return (
      <footer style={FooterStyles.footer}>
        Built by &nbsp;
        <a target="_blank" href="https://uk.linkedin.com/in/ricardo-villanueva-12b73426">
          Ricardo Villanueva
        </a>
      </footer>
    );
  }
}
