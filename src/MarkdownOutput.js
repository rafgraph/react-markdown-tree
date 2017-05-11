// @flow
import React from 'react';
import { Markdown } from 'react-markdown-tree';

export default class MarkdownOutput extends React.PureComponent {
  props: {
    text: string,
    style: {},
    layout: 'horizontal' | 'vertical',
  };
  render() {
    const style = {
      ...this.props.style,
    };
    if (this.props.layout === 'horizontal') {
      style.width = '50%';
      style.height = '100%';
      style.borderLeftWidth = '3px';
      style.borderTopWidth = '0px';
    } else {
      style.width = '100%';
      style.height = '50%';
      style.borderTopWidth = '3px';
      style.borderLeftWidth = '0px';
    }
    return (
      <Markdown style={style}>
        {this.props.text}
      </Markdown>
    );
  }
}
