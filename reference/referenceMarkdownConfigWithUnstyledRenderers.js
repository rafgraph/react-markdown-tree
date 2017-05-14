// @flow
import React from 'react';

// unstyled reference markdown renderers
// the props they receive are provided as flow types for reference
// but you do not need to to use flow when creating your renderers

// all renderers are optional (if not provided, an unstyled renderer is used)
// all renderers must return a ReactElement or null
// to not allow a specific tag return null from its renderer

// for default styled renderers see:
// https://github.com/rafrex/react-markdown-tree-config-default

const Heading = (props: { level: number, children: any }) => {
  const H = `h${props.level}`;
  return <H>{props.children}</H>;
};

const Paragraph = (props: { children: any }) => {
  return <p>{props.children}</p>;
};

const Link = (props: { href: string, title?: string, children: any }) => {
  return <a href={props.href} title={props.title}>{props.children}</a>;
};

const Image = (props: { src: string, alt: string, title?: string }) => {
  return <img src={props.src} alt={props.alt} title={props.title} />;
};

// tight prop is if the list items don't have blank lines between them
// if a list is not tight then the contents are automatically wrapped in p tags
// e.g. <li><p>rendered item of loose list</p></li>
// see http://spec.commonmark.org/0.26/#lists for more info
// you don't have to wrry about this in your renderer unless you want to
// treat tight/loose lists differently (the p tags are already a part of children)
const List = (props: {
  type: 'ordered' | 'bullet',
  start?: number,
  tight: boolean,
  children: any,
}) => {
  if (props.type === 'ordered') {
    return <ol start={props.start}>{props.children}</ol>;
  }
  return <ul>{props.children}</ul>;
};

const Item = (props: { children: any }) => {
  return <li>{props.children}</li>;
};

const BlockQuote = (props: { children: any }) => {
  return <blockquote>{props.children}</blockquote>;
};

const Emph = (props: { children: any }) => {
  return <em>{props.children}</em>;
};

const Strong = (props: { children: any }) => {
  return <strong>{props.children}</strong>;
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

const Code = (props: { literal: string }) => {
  return <code>{props.literal}</code>;
};

const CodeBlock = (props: { literal: string, language?: string }) => {
  return <pre>{props.literal}</pre>;
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
