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
      fontFamily: 'helvetica, sans-sarif',
      fontSize: '15px',
      letterSpacing: '0.5px',
      lineHeight: '19px',
      wordWrap: 'break-word',
      outline: 'none',
      resize: 'none',
      boxShadow: 'none',
      MozBoxShawdow: 'none',
      borderRadius: '0',
    };

    if (this.props.layout === 'horizontal') {
      style.width = 'calc(50% - 3px)';
      style.height = '100%';
    } else {
      style.width = '100%';
      style.height = 'calc(50% - 3px)';
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
