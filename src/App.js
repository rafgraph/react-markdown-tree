// @flow
import React from 'react';
import MarkdownInput from './MarkdownInput';
import MarkdownOutput from './MarkdownOutput';

const textBoxStyle = {
  borderWidth: '0px',
  borderColor: 'rgb(0, 120, 0)',
  borderStyle: 'solid',
  boxSizing: 'border-box',
  margin: '0',
  padding: '10px',
  backgroundColor: '#F0F0F0',
  overflow: 'scroll',
  WebkitOverflowScrolling: 'touch',
};

export default class App extends React.Component {
  determineLayout = (mql: { matches: boolean }) =>
    mql.matches ? 'horizontal' : 'vertical';

  aspectRatioMql: {
    matches: boolean,
    addListener: Function,
    removeListener: Function,
  } = window.matchMedia('(min-aspect-ratio: 1/1)');

  state = {
    text: '',
    layout: this.determineLayout(this.aspectRatioMql),
  };

  componentDidMount() {
    this.aspectRatioMql.addListener(this.updateLayout);
  }

  componentWillUnmount() {
    this.aspectRatioMql.removeListener(this.updateLayout);
  }

  updateLayout = (mql: { matches: boolean }) => {
    this.setState({ layout: this.determineLayout(mql) });
  };

  updateInput = (text: string) => {
    this.setState({ text });
  };

  render() {
    console.log(this.state.layout);
    return (
      <div
        style={{
          display: 'flex',
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
