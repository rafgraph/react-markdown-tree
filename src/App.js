import React from 'react';
import MarkdownInput from './MarkdownInput';
import MarkdownOutput from './MarkdownOutput';

const textBoxStyle = {
  border: 'none',
  boxSizing: 'border-box',
  margin: '0',
  padding: '10px 18px',
  backgroundColor: 'white',
  overflow: 'scroll',
  WebkitOverflowScrolling: 'touch',
};

export default class App extends React.Component {
  determineLayout = (mql) => (mql.matches ? 'horizontal' : 'vertical');

  aspectRatioMql = window.matchMedia('(min-aspect-ratio: 1/1)');

  state = {
    text: '# Loading...',
    layout: this.determineLayout(this.aspectRatioMql),
  };

  componentDidMount() {
    this.aspectRatioMql.addListener(this.updateLayout);

    const _this = this;
    const request = new XMLHttpRequest();
    request.addEventListener('load', function () {
      _this.updateInput(this.responseText);
    });
    request.addEventListener('error', () => {
      this.updateInput(
        '### An error occurred while loading the example markdown content, ' +
          'but you can still edit this content or refresh the page to try again.',
      );
    });
    request.open('GET', '/markdown/example-markdown.md', true);
    request.send();
  }

  componentWillUnmount() {
    this.aspectRatioMql.removeListener(this.updateLayout);
  }

  updateLayout = (mql) => {
    this.setState({ layout: this.determineLayout(mql) });
  };

  updateInput = (text) => {
    this.setState({ text });
  };

  render() {
    return (
      <div
        style={{
          display: 'flex',
          justifyContent: 'space-between',
          flexDirection: this.state.layout === 'horizontal' ? 'row' : 'column',
          height: '100%',
          width: '100%',
          backgroundColor: 'rgb(0, 120, 0)',
        }}
      >
        <MarkdownInput
          text={this.state.text}
          updateInput={this.updateInput}
          style={textBoxStyle}
          layout={this.state.layout}
        />
        <MarkdownOutput
          text={this.state.text}
          style={textBoxStyle}
          layout={this.state.layout}
        />
      </div>
    );
  }
}
