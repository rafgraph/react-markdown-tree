// @flow
import React from 'react';

export default class MarkdownInput extends React.PureComponent {
  props: {
    updateInput: Function,
    text: string,
    style: {},
  };

  handleChange = (e: { target: { value: string } }) => {
    this.props.updateInput(e.target.value);
  };
  render() {
    return (
      <textarea
        style={{
          ...this.props.style,
          borderRightWidth: '3px',
          outline: 'none',
          resize: 'none',
          boxShadow: 'none',
        }}
        value={this.props.text}
        onChange={this.handleChange}
      />
    );
  }
}
