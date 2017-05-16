# React Markdown Tree

[Live Example](http://react-markdown-tree.rafrex.com)

React markdown component that renders markdown as customizable React components and *never* uses `dangerouslySetInnerHTML`.
- Renders markdown according to the [CommonMark spec](http://commonmark.org/) (powered by [`commonmark.js`](https://github.com/jgm/commonmark.js) and [`commonmark-react-renderer`](https://github.com/rexxars/commonmark-react-renderer)).
- Create your own renderers as React components for custom styling or use [`react-markdown-tree-config-default`](https://github.com/rafrex/react-markdown-tree-config-default) for zero setup default styling with syntax highlighting.
- Easy to use provider/child pattern - set the config once in `<MarkdownProvider>` and use `<Markdown>` anywhere in your app with zero props.

```shell
$ yarn add react-markdown-tree
# OR
$ npm install --save react-markdown-tree
```

```shell
# to use with the default config:
$ yarn add react-markdown-tree-config-default
# OR
$ npm install --save react-markdown-tree-config-default
```

```js
import React from 'react';
import ReactDOM from 'react-dom';
import { MarkdownProvider } from 'react-markdown-tree';
import markdownConfig from 'react-markdown-tree-config-default';
import App from './App';

ReactDOM.render(
  <MarkdownProvider config={markdownConfig}>
    <App />
  </MarkdownProvider>,
  document.getElementById('root'),
);
```


```js
// App.js or any other component that is a child of App
import { Markdown } from 'react-markdown-tree';
...

render() {
  return (
    <Markdown>
      {this.state.stringInMarkdownFormat /* any string containing the markdown source to render */}
    </Markdown>
  );
}
```

You can also use the UMD build that's available from Unpkg:
```html
<!-- Available at window.ReactMarkdownTree -->
<script src="https://unpkg.com/react-markdown-tree/dist/react-markdown-tree.min.js"></script>

<!-- Available at window.ReactMarkdownTreeConfigDefault -->
<script src="https://unpkg.com/react-markdown-tree-config-default/dist/react-markdown-tree-config-default.min.js"></script>
```

## API

### `<Markdown>`
#### `children: string`
- String containing the markdown source to render
- Not required, but if not provided `<Markdown>` returns `null` and does not render

#### `as: string | ReactComponent`
- Not required, default is `'div'`
- What the markdown container element is rendered as
- String as an html tag name, e.g. `'div'` will render a `<div>` container, `'section'` will render a `<section>` container, etc...
- By default the container is rendered as a `<div>`
- If you provide a `ReactComponent` instead of a string, the rendered markdown will be passed down as an array of `children` to that component

#### `...rest`
- All other props will be passed down to the markdown container element, e.g. `className`, `style`, etc...

#### For Example
- `<Markdown as="section" className="some-markdown"># Some Heading</Markdown>` will render on the page as `<section class="some-markdown"><h1>Some Heading</h1><section/>`

### `<MarkdownProvider>`
#### `config: object`
- Not required, but if it is not provided unstyled html will be rendered
- Object with keys for `renderers` and `containerProps`
- Note that you can only set the config once when the `<MarkdownProvider>` is mounted, and you cannot change the config once it has been set.
- For a reference config with unstyled renderers see [`referenceMarkdownConfigWithUnstyledRenderers.js`](https://github.com/rafrex/react-markdown-tree/blob/master/reference/referenceMarkdownConfigWithUnstyledRenderers.js)
```js
const config = {
  renderers: {
    Heading: /* ReactComponent */,
    Paragraph: /* ReactComponent */,
    Link: /* ReactComponent */,
    Image: /* ReactComponent */,
    List: /* ReactComponent */,
    Item: /* ReactComponent */,
    BlockQuote: /* ReactComponent */,
    Emph: /* ReactComponent */,
    Strong: /* ReactComponent */,
    Softbreak: /* ReactComponent */,
    Linebreak: /* ReactComponent */,
    ThematicBreak: /* ReactComponent */,
    Code: /* ReactComponent */,
    CodeBlock: /* ReactComponent */,
  },
  containerProps: {
    // default props passed down to every instance of <Markdown>
    // see <Markdown> API for prop definitions
  },
};
```

#### Publishing Custom Configs
- Please create and publish custom configs on `npm` for others to use!
- Publish under `react-markdown-tree-config-YOUR-CONFIG-NAME`
- Let me know and I'll add them to the README
