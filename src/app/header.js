class Header extends React.Component {
  constructor() {
    super();
    this.menuId = "menu";
    this.hashMenuId = `#${this.menuId}`;
  }

  render() {
    return (
      <div className="header">
        <div className="navbar navbar-inverse navbar-fixed-top" role="navigation">
          <div className="container">
            <div className="navbar-header">

              <a href={this.hashMenuId} className="navbar-toggle collapsed">
                <span className="sr-only">Menu</span>
                <span className="icon-bar"></span>
                <span className="icon-bar"></span>
                <span className="icon-bar"></span>
              </a>

              <div className="navbar-brand">
                <a className="menu-bars" href={this.hashMenuId}><i className="fa fa-bars fa-1x" aria-hidden="true"></i></a>
                <span>&nbsp;&nbsp;&nbsp;</span>
                <a href="#!/">The Codestein</a>
              </div>
            </div>

            <div className="collapse navbar-collapse">
              <ul className="nav navbar-nav">
                <li className="active"><a href="#!/">Home</a></li>
              </ul>
            </div>
          </div>
        </div>
        <Menu menuId={this.menuId}/>
      </div>
    );
  }
}
