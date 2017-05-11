// @flow
import React from 'react';
import PropTypes from 'prop-types';

export default class Markdown extends React.PureComponent {
  props: {
    children: string,
  };

  static propTypes = {
    children: PropTypes.string,
  };

  static defaultProps = {
    children: null,
  };

  static contextTypes = {
    reactMarkdownTree: PropTypes.shape({
      parseMarkdown: PropTypes.func.isRequired,
      renderMarkdown: PropTypes.func.isRequired,
    }).isRequired,
  };

  parseMarkdown = this.context.reactMarkdownTree.parseMarkdown;
  renderMarkdown = this.context.reactMarkdownTree.renderMarkdown;

  render() {
    if (this.props.children === null) return null;
    const ast = this.parseMarkdown(this.props.children);
    const renderedMarkdown = this.renderMarkdown(ast);
    return (
      <div style={{ border: '1px solid black' }}>
        {renderedMarkdown}
      </div>
    );
  }
}
