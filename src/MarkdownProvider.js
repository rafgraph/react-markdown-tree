// @flow
import React from 'react';
import PropTypes from 'prop-types';

export default class MarkdownProvider extends React.Component {
  props: {
    children?: any,
  };

  static childContextTypes = {
    reactMarkdownTree: PropTypes.string.isRequired,
  };

  getChildContext() {
    return {
      reactMarkdownTree: 'blue',
    };
  }

  render() {
    const { children } = this.props;
    return children ? React.Children.only(children) : null;
  }
}
