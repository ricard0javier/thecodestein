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
          <Title/>
          <Articles url="http://localhost:8080/api/articles"/>
        </main>
        <Footer/>
      </div>
    );
  }
}
