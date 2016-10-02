const Article = React.createClass({
  getInitialState() {
    this.getContent(this.props.url);
    return {content: "Loading..."};
  },

  getContent(url) {
    axios
    .get(url)
    .then(response => {
      this.setState({content: marked(response.data)});
    });
  },

  render() {
    return <div dangerouslySetInnerHTML={{__html: this.state.content}}/>;
  }
});

Article.propTypes = {
  url: React.PropTypes.object.isRequired
};
