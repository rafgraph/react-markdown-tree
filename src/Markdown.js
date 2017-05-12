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
    renderMarkdown: PropTypes.func.isRequired,
  };

  renderMarkdown = this.context.renderMarkdown;

  render() {
    if (this.props.children === null) return null;
    const { as, children, ...rest } = this.props;
    const As = as;
    return (
      <As {...rest}>
        {this.renderMarkdown(children)}
      </As>
    );
  }
}
