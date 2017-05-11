// @flow
import React from 'react';

export default class MarkdownInput extends React.PureComponent {
  props: {
    updateInput: Function,
    text: string,
    style: {},
    layout: 'horizontal' | 'vertical',
  };

  handleChange = (e: { target: { value: string } }) => {
    this.props.updateInput(e.target.value);
  };
  render() {
    const style = {
      ...this.props.style,
      outline: 'none',
      resize: 'none',
      boxShadow: 'none',
      MozBoxShawdow: 'none',
      borderRadius: '0',
    };
    if (this.props.layout === 'horizontal') {
      style.width = '50%';
      style.height = '100%';
      style.borderRightWidth = '3px';
      style.borderBottomWidth = '0px';
    } else {
      style.width = '100%';
      style.height = '50%';
      style.borderBottomWidth = '3px';
      style.borderRightWidth = '0px';
    }
    return (
      <textarea
        style={style}
        value={this.props.text}
        onChange={this.handleChange}
      />
    );
  }
}
