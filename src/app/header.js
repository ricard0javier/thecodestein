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
  }
};

class Header extends React.Component {
  render() {
    return (
      <div className="header">
        <div className="navbar navbar-inverse navbar-fixed-top" role="navigation">
          <div className="container">
            <div className="navbar-header">

              <button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#js-navbar-collapse">
                <span className="sr-only">Toggle navigation</span>
                <span className="icon-bar"></span>
                <span className="icon-bar"></span>
                <span className="icon-bar"></span>
              </button>

              <a className="navbar-brand" href="#!/">The Codestein</a>
            </div>

            <div className="collapse navbar-collapse" id="js-navbar-collapse">

              <ul className="nav navbar-nav" nav-bar-state>
                <li className="active"><a href="#!/">Home</a></li>
                <li><a ng-href="#!/blog">Blog</a></li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
