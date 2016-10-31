import React, {Component} from 'react';
import axios from 'axios';
import marked from 'marked';

/* eslint-disable react/no-danger */
export class Article extends Component {
  constructor() {
    super();
    this.state = {content: "<i class='fa fa-spinner fa-spin'></i><span> Loading...</span>"};
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
/* eslint-enable react/no-danger */

Article.propTypes = {
  url: React.PropTypes.string.isRequired
};
