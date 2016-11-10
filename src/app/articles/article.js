import React, {Component, PropTypes} from 'react';
import axios from 'axios';
import marked from 'marked';

import '../configuration/markedConfiguration';

/* eslint-disable react/no-danger */
export class Article extends Component {
  constructor(props) {
    super(props);
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
  url: PropTypes.string.isRequired
};

export default Article;
