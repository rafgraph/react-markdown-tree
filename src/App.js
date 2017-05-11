// @flow
import React from 'react';
import MarkdownInput from './MarkdownInput';
import MarkdownOutput from './MarkdownOutput';

const textBoxStyle = {
  width: '50%',
  height: '100%',
  borderWidth: '0px',
  borderColor: 'rgb(0, 120, 0)',
  borderStyle: 'solid',
  boxSizing: 'border-box',
  padding: '10px',
  backgroundColor: '#F0F0F0',
  overflow: 'scroll',
  WebkitOverflowScrolling: 'touch',
};

export default class App extends React.Component {
  state = { text: '' };

  updateInput = (text: string) => {
    this.setState({ text });
  };

  render() {
    return (
      <div style={{ display: 'flex', height: '100%', width: '100%' }}>
        <MarkdownInput
          text={this.state.text}
          updateInput={this.updateInput}
          style={textBoxStyle}
        />
        <MarkdownOutput text={this.state.text} style={textBoxStyle} />
      </div>
    );
  }
}
