// @flow
import React from 'react';
import PropTypes from 'prop-types';
import { Parser } from 'commonmark';
import ReactRenderer from 'commonmark-react-renderer';
import warning from 'warning';

export default class MarkdownProvider extends React.Component {
  props: {
    children?: any,
    config: { containerProps: {}, renderers: {} },
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
      containerProps: PropTypes.object.isRequired,
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
    renderers: this.props.config.renderers,
  });

  // the parser returns an abstract syntax tree (ast), that the renderer renders
  renderMarkdown = (source: string): Array<React$Element<any>> =>
    this.renderer.render(MarkdownProvider.parser.parse(source));

  // props passed down to every instance of <Markdown>
  containerProps = {
    as: 'div',
    ...this.props.config.containerProps,
  };

  UNSAFE_componentWillReceiveProps(nextProps: {
    config: { containerProps: {}, renderers: {} },
  }) {
    warning(
      this.props.config === nextProps.config &&
        (!this.props.config ||
          (this.props.config.containerProps ===
            nextProps.config.containerProps &&
            this.props.config.renderers === nextProps.config.renderers &&
            (!this.props.config.renderers ||
              (Object.keys(nextProps.config.renderers).length ===
                Object.keys(this.props.config.renderers).length &&
                Object.keys(nextProps.config.renderers).every(
                  key =>
                    this.props.config.renderers[key] ===
                    nextProps.config.renderers[key],
                ))))),
      'You cannot change the MarkdownProvider config',
    );
  }

  getChildContext() {
    return {
      reactMarkdownTree: {
        renderMarkdown: this.renderMarkdown,
        containerProps: this.containerProps,
      },
    };
  }

  render() {
    const { children } = this.props;
    return children ? React.Children.only(children) : null;
  }
}
