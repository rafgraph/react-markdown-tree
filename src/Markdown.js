// @flow
import React from 'react';
import PropTypes from 'prop-types';

export default class Markdown extends React.PureComponent {
  props: {
    children: string | null,
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
      renderMarkdown: PropTypes.func.isRequired,
      containerProps: PropTypes.object,
    }).isRequired,
  };

  render() {
    if (this.props.children === null) return null;
    const combinedProps = {
      ...this.context.reactMarkdownTree.containerProps,
      ...this.props,
    };
    const { as, children, ...rest } = combinedProps;
    const As = as;
    return (
      <As {...rest}>
        {this.context.reactMarkdownTree.renderMarkdown(children)}
      </As>
    );
  }
}
