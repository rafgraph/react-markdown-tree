import React from 'react';
import PropTypes from 'prop-types';
import { Parser } from 'commonmark';
import ReactRenderer from 'commonmark-react-renderer';
import MarkdownContext from './MarkdownContext';

const rendererConfig = {
  sourcePos: false,
  escapeHtml: true,
  skipHtml: false,
  softBreak: '\n',
};

const parser = new Parser();

const MarkdownProvider = (props) => {
  const config = props.config || {};

  const renderer = new ReactRenderer({
    ...rendererConfig,
    renderers: config.renderers,
  });

  // the parser returns an abstract syntax tree (ast), that the renderer renders
  const renderMarkdown = (source) => renderer.render(parser.parse(source));

  // props passed down to every instance of <Markdown>
  const containerProps = {
    as: 'div',
    ...config.containerProps,
  };

  return (
    <MarkdownContext.Provider value={{ renderMarkdown, containerProps }}>
      {props.children}
    </MarkdownContext.Provider>
  );
};
MarkdownProvider.propTypes = {
  children: PropTypes.node,
  config: PropTypes.object,
};

export default MarkdownProvider;
