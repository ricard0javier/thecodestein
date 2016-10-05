class Article extends React.Component {
  constructor() {
    super();
    this.state = {content: "Loading..."};
  }

  componentDidMount() {
    axios
    .get(this.props.url)
    .then(response => {
      const decoratedMarkdownHtml = marked(response.data);
      this.setState({content: decoratedMarkdownHtml});
    });
  }

  render() {
    return (<div className="alpha-div" dangerouslySetInnerHTML={{__html: this.state.content}}/>);
  }
}

Article.propTypes = {
  url: React.PropTypes.string.isRequired
};
