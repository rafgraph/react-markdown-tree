// @flow
import React from 'react';
import PropTypes from 'prop-types';
import { Parser } from 'commonmark';
import ReactRenderer from 'commonmark-react-renderer';
import warning from 'warning';

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

  static rendererConfig = {
    sourcePos: false,
    escapeHtml: true,
    skipHtml: false,
    softBreak: '\n',
  };

  parser = new Parser();
  renderer = new ReactRenderer({
    ...MarkdownProvider.rendererConfig,
    renderers: this.props.config,
  });

  componentWillReceiveProps(nextProps: { config: {} }) {
    warning(
      this.props.config === nextProps.config,
      'You cannot change the MarkdownProvider config',
    );
  }

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
