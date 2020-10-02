import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import MarkdownContext from './MarkdownContext';

const Markdown = (props) => {
  const markdownConfig = useContext(MarkdownContext);

  if (props.children === null) return null;
  const combinedProps = {
    ...markdownConfig.containerProps,
    ...props,
  };
  const { as, children, ...rest } = combinedProps;
  const As = as;
  return <As {...rest}>{markdownConfig.renderMarkdown(children)}</As>;
};

Markdown.propTypes = {
  children: PropTypes.string,
  as: PropTypes.oneOfType([PropTypes.string, PropTypes.func]),
};

export default Markdown;
