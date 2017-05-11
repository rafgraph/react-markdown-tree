// @flow
import React from 'react';

export default class MarkdownInput extends React.PureComponent {
  props: {
    updateInput: Function,
    text: string,
  };

  handleChange = (e: { target: { value: string } }) => {
    this.props.updateInput(e.target.value);
  };
  render() {
    return <textarea value={this.props.text} onChange={this.handleChange} />;
  }
}
