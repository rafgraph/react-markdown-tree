// @flow
import React from 'react';
import PropTypes from 'prop-types';
import { Parser } from 'commonmark';
import ReactRenderer from 'commonmark-react-renderer';
import warning from 'warning';

export default class MarkdownProvider extends React.Component {
  props: {
    children?: any,
    config: { containerProps: {} },
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
      renderMarkdown: PropTypes.func.isRequired,
      containerProps: PropTypes.object,
    }).isRequired,
  };

  static parser = new Parser();

  static rendererConfig = {
    sourcePos: false,
    escapeHtml: true,
    skipHtml: false,
    softBreak: '\n',
  };

  renderer = new ReactRenderer({
    ...MarkdownProvider.rendererConfig,
    renderers: (() => {
      const renderers = { ...this.props.config };
      delete renderers.containerProps;
      return renderers;
    })(),
  });

  // the parser returns an abstract syntax tree (ast), that the renderer renders
  renderMarkdown = (source: string): Array<React$Element<any>> =>
    this.renderer.render(MarkdownProvider.parser.parse(source));

  componentWillReceiveProps(nextProps: { config: { containerProps: {} } }) {
    warning(
      this.props.config === nextProps.config &&
        Object.keys(nextProps.config).length ===
          Object.keys(this.props.config).length &&
        Object.keys(nextProps.config).every(
          key => this.props.config[key] === nextProps.config[key],
        ),
      'You cannot change the MarkdownProvider config',
    );
  }

  getChildContext() {
    return {
      reactMarkdownTree: {
        renderMarkdown: this.renderMarkdown,
        containerProps: this.props.config.containerProps || {},
      },
    };
  }

  render() {
    const { children } = this.props;
    return children ? React.Children.only(children) : null;
  }
}
