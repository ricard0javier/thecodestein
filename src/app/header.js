const HeaderStyles = {
  header: {
    display: 'flex',
    alignItems: 'center',
    backgroundColor: '#1f1f1f'
  },
  title: {
    flex: 1,
    fontSize: '1.5rem',
    margin: '1rem'
  },
  date: {
    flex: 1,
    textAlign: 'right',
    margin: '1rem',
    color: 'white'
  }
};

class Header extends React.Component {
  render() {
    return (
      <header style={HeaderStyles.header}>
        <p style={HeaderStyles.title}>
          <a href="https://github.com/FountainJS/generator-fountain-webapp" target="_blank">
            Fountain Generator
          </a>
        </p>
        <p style={HeaderStyles.date}>
          Generated with FountainJS v0.7.1 on Thu Aug 25 2016 10:19:19 GMT+0000 (UTC)
        </p>
      </header>
    );
  }
}
