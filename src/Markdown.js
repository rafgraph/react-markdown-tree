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
    reactMarkdownTree: PropTypes.string.isRequired,
  };

  render() {
    if (this.props.children === null) return null;
    return (
      <div
        style={{
          color: this.context.reactMarkdownTree,
          border: '1px solid black',
        }}
      >
        {this.props.children}
      </div>
    );
  }
}
