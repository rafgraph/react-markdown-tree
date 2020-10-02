import React from 'react';
import { Markdown } from 'react-markdown-tree';

export default class MarkdownOutput extends React.PureComponent {
  render() {
    const style = {
      ...this.props.style,
    };

    if (this.props.layout === 'horizontal') {
      style.width = 'calc(50% - 3px)';
      style.height = '100%';
    } else {
      style.width = '100%';
      style.height = 'calc(50% - 3px)';
    }

    return <Markdown style={style}>{this.props.text}</Markdown>;
  }
}
