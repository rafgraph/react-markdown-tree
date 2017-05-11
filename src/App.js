// @flow
import React from 'react';
import MarkdownInput from './MarkdownInput';
import MarkdownOutput from './MarkdownOutput';

export default class App extends React.Component {
  state = { text: '' };

  updateInput = (text: string) => {
    this.setState({ text });
  };

  render() {
    return (
      <div>
        <MarkdownInput text={this.state.text} updateInput={this.updateInput} />
        <MarkdownOutput text={this.state.text} />
      </div>
    );
  }
}
