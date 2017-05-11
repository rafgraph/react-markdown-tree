// @flow
import React from 'react';
import PropTypes from 'prop-types';

export default class Markdown extends React.PureComponent {
  props: {
    children: string,
    as: string | Function,
  };

  static propTypes = {
    children: PropTypes.string,
    as: PropTypes.oneOfType([PropTypes.string, PropTypes.func]),
  };

  static defaultProps = {
    children: null,
    as: 'div',
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
    const { as, children, ...rest } = this.props;
    const ast = this.parseMarkdown(children);
    const renderedMarkdown = this.renderMarkdown(ast);
    const As = as;
    return (
      <As {...rest}>
        {renderedMarkdown}
      </As>
    );
  }
}
