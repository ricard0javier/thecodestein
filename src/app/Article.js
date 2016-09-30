class Article extends React.Component {

  constructor() {
    super();
    this.state = {content: "Loading..."};
    this.getContent("static/greetings.md");
  }

  getContent(url) {
    axios
    .get(url)
    .then(response => {
      this.setState({content: response.data});
    });
  }

  render() {
    return (
      <div><b>{this.state.content}</b></div>
      );
  }
}
