import React from 'react';
import PropTypes from 'prop-types';

// unstyled reference markdown renderers
// all renderers are optional (if not provided, an unstyled renderer is used)
// all renderers must return a ReactElement or null
// to not allow a specific tag return null from its renderer

// for a set of styled renderers see:
// https://github.com/rafgraph/react-markdown-tree-config-default

const Heading = (props) => {
  const H = `h${props.level}`;
  return <H>{props.children}</H>;
};
Heading.propTypes = {
  level: PropTypes.number.isRequired,
  children: PropTypes.node,
};

const Paragraph = (props) => {
  return <p>{props.children}</p>;
};
Paragraph.propTypes = {
  children: PropTypes.node,
};

const Link = (props) => {
  return (
    <a href={props.href} title={props.title}>
      {props.children}
    </a>
  );
};
Link.propTypes = {
  href: PropTypes.string,
  title: PropTypes.string,
  children: PropTypes.node,
};

const Image = (props) => {
  return <img src={props.src} alt={props.alt} title={props.title} />;
};
Image.propTypes = {
  src: PropTypes.string,
  alt: PropTypes.string,
  title: PropTypes.string,
};

// tight prop is if the list items don't have blank lines between them
// if a list is not tight then the contents are automatically wrapped in p tags
// e.g. <li><p>rendered item of loose list</p></li>
// see https://spec.commonmark.org/0.26/#lists for more info
// you don't have to worry about this in your renderer unless you want to
// treat tight/loose lists differently (the p tags are already a part of children)
const List = (props) => {
  if (props.type === 'ordered') {
    return <ol start={props.start}>{props.children}</ol>;
  }
  return <ul>{props.children}</ul>;
};
List.propTypes = {
  type: PropTypes.oneOf(['ordered', 'bullet']).isRequired,
  start: PropTypes.number,
  tight: PropTypes.bool,
  children: PropTypes.node,
};

const Item = (props) => {
  return <li>{props.children}</li>;
};
Item.propTypes = {
  children: PropTypes.node,
};

const BlockQuote = (props) => {
  return <blockquote>{props.children}</blockquote>;
};
BlockQuote.propTypes = {
  children: PropTypes.node,
};

const Emph = (props) => {
  return <em>{props.children}</em>;
};
Emph.propTypes = {
  children: PropTypes.node,
};

const Strong = (props) => {
  return <strong>{props.children}</strong>;
};
Strong.propTypes = {
  children: PropTypes.node,
};

const Softbreak = () => {
  // returning null will render text as though the softbreak doesn't exist
  // to render a line break instead, return <br />;
  // to render a space, omit this renderer
  return null;
};

// a line with 2 spaces at the end followed by a return
const Linebreak = () => {
  return <br />;
};

const ThematicBreak = () => {
  return <hr />;
};

const Code = (props) => {
  return <code>{props.literal}</code>;
};
Code.propTypes = {
  literal: PropTypes.string,
};

const CodeBlock = (props) => {
  return <pre>{props.literal}</pre>;
};
CodeBlock.propTypes = {
  literal: PropTypes.string,
  language: PropTypes.string,
};

export default {
  renderers: {
    Heading,
    Paragraph,
    Link,
    Image,
    List,
    Item,
    BlockQuote,
    Emph,
    Strong,
    Softbreak,
    Linebreak,
    ThematicBreak,
    Code,
    CodeBlock,
  },
};
