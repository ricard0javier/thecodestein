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
        <main style={MainStyles.main}>
          <Title/>
          <Articles url="http://localhost:8080/articles"/>
          <Techs/>
        </main>
        <Footer/>
      </div>
    );
  }
}
