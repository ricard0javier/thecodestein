class Articles extends React.Component {
  constructor() {
    super();

    this.state = {
      articleUrls: []
    };
  }

  componentDidMount() {
    axios
    .get(this.props.url)
    .then(response => {
      this.setState({articleUrls: response.data});
    });
  }

  render() {
    return (
      <div>
      {this.state.articleUrls.map((articleUrl, index) => (
        <Article key={index} url={articleUrl}/>
        ))}
      </div>
    );
  }
}

Articles.propTypes = {
  url: React.PropTypes.object.isRequired
};
