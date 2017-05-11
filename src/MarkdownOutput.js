// @flow
import React from 'react';
import { Markdown } from 'react-markdown-tree';

export default class MarkdownOutput extends React.PureComponent {
  props: {
    text: string,
    style: {},
  };
  render() {
    return (
      <Markdown style={{ ...this.props.style, borderLeftWidth: '3px' }}>
        {this.props.text}
      </Markdown>
    );
  }
}
