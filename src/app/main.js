const MainStyles = {
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

class Main extends React.Component {
  render() {
    return (
      <div style={MainStyles.container}>
        <Header/>
        <main className="container" style={MainStyles.main}>
          <Articles url="http://www.thecodestein.com/api/articles"/>
        </main>
        <Footer/>
      </div>
    );
  }
}
