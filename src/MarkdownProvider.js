// @flow
import React from 'react';
import PropTypes from 'prop-types';
import { Parser } from 'commonmark';
import ReactRenderer from 'commonmark-react-renderer';

export default class MarkdownProvider extends React.Component {
  props: {
    children?: any,
    config: {},
  };

  static propTypes = {
    children: PropTypes.node,
    config: PropTypes.object,
  };

  static defaultProps = {
    config: {},
  };

  static childContextTypes = {
    reactMarkdownTree: PropTypes.shape({
      parseMarkdown: PropTypes.func.isRequired,
      renderMarkdown: PropTypes.func.isRequired,
    }).isRequired,
  };

  parser = new Parser();
  renderer = new ReactRenderer(this.props.config);

  getChildContext() {
    return {
      reactMarkdownTree: {
        parseMarkdown: this.parser.parse.bind(this.parser),
        renderMarkdown: this.renderer.render.bind(this.renderer),
      },
    };
  }

  render() {
    const { children } = this.props;
    return children ? React.Children.only(children) : null;
  }
}
