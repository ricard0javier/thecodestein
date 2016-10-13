class Menu extends React.Component {
  componentDidMount() {
    const hashMenuId = `#${this.props.menuId}`;
    // the library uses jquery, sorry...
    $(hashMenuId).mmenu({
      extensions: [
        "theme-black",
        "pagedim-black"
      ],
      counters: true,
      navbars: [
        {
          position: "top",
          content: ["searchfield"]
        },
        {
          position: "top"
        },
        {
          position: "bottom",
          content: [
            "<a class='fa fa-envelope' href='mailto:villanueva.ricardo@gmail.com'></a>",
            "<a class='fa fa-twitter' href='https://twitter.com/RicardoJavierVZ'></a>",
            "<a class='fa fa-linkedin' href='https://uk.linkedin.com/in/ricardo-villanueva-12b73426'></a>"
          ]
        }
      ]
    });
  }

  render() {
    return (
      <div>
        <nav id={this.props.menuId}>
          <ul>
            <li><a href="/">Home</a></li>
            <li><a href="/about">About us</a>
              <ul>
                <li><a href="/about/history">History</a></li>
                <li><a href="/about/team">The team</a></li>
                <li><a href="/about/address">Our address</a></li>
              </ul>
            </li>
            <li><a href="/contact">Contact</a></li>
          </ul>
        </nav>
      </div>
    );
  }
}

Menu.propTypes = {
  menuId: React.PropTypes.string.isRequired
};
