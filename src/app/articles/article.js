const Article = React.createClass({
  getInitialState() {
    this.getContent(this.props.url);
    return {content: "Loading..."};
  },

  getContent(url) {
    axios
    .get(url)
    .then(response => {
      var decoratedMarkdownHtml = marked(response.data);
      this.setState({content: decoratedMarkdownHtml});
    });
  },

  render() {
    return <div className="alpha-div" dangerouslySetInnerHTML={{__html: this.state.content}}/>;
  }
});

Article.propTypes = {
  url: React.PropTypes.object.isRequired
};
