// @flow
import React from 'react';
import { Markdown } from 'react-markdown-tree';

export default class MarkdownOutput extends React.PureComponent {
  props: {
    text: string,
  };
  render() {
    return <Markdown>{this.props.text}</Markdown>;
  }
}
