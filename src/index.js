// @flow
import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { MarkdownProvider } from 'react-markdown-tree';
import markdownConfig from 'react-markdown-tree-config-default';

ReactDOM.render(
  <MarkdownProvider config={markdownConfig}>
    <App />
  </MarkdownProvider>,
  document.getElementById('root'),
);
