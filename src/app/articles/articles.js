import React, {Component} from 'react';
import axios from 'axios';
import {Article} from './article';

export class Articles extends Component {
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
  url: React.PropTypes.string.isRequired
};
