// @flow
import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { MarkdownProvider } from 'react-markdown-tree';

ReactDOM.render(
  <MarkdownProvider>
    <App />
  </MarkdownProvider>,
  document.getElementById('root'),
);
