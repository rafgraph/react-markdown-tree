# React Markdown Tree

[https://github.com/rafrex/react-markdown-tree](https://github.com/rafrex/react-markdown-tree 'GitHub Repo for React Markdown Tree')

### Live example - type and see changes!

- React Markdown Tree renders markdown as customizable React components and *never* uses `dangerouslySetInnerHTML`.
- Use [`react-markdown-tree-config-default`](https://github.com/rafrex/react-markdown-tree-config-default) for zero setup default styling with syntax highlighting (or create your own renderers as React components for custom styling). The default config is used to render this example site.
- Easy to use provider/child pattern - set the config once in `<MarkdownProvider>` and use `<Markdown>` anywhere in your app with zero props.

```shell
$ yarn add react-markdown-tree
$ yarn add react-markdown-tree-config-default
```

```js
import React from 'react';
import { MarkdownProvider } from 'react-markdown-tree';
import markdownConfig from 'react-markdown-tree-config-default';
import MyComponent from './MyComponent';

class App extends React.Component {
  render() {
    return (
      <MarkdownProvider config={markdownConfig}>
        <MyComponent />
      </MarkdownProvider>
    );
  }
}
```

```js
// MyComponent.js
// or any component that is a child of <MarkdownProvider>
import React from 'react';
import { Markdown } from 'react-markdown-tree';

function MyComponent() {
  return (
    <Markdown>
      # This is a Heading {/* string in markdown format */}
    </Markdown>
  );
}
```

# Heading 1
## Heading 2
### Heading 3
#### Heading 4
##### Heading 5
###### Heading 6

This is a paragraph of hipster text. Microdosing godard organic listicle kitsch, kale chips narwhal tousled jean shorts lumbersexual bespoke skateboard tacos swag. Church-key vinyl butcher austin leggings. Flannel hot chicken hexagon hella +1. Live-edge 8-bit glossier, butcher cardigan vinyl cold-pressed venmo. Meh letterpress XOXO lyft artisan af. Affogato woke microdosing jean shorts, polaroid XOXO enamel pin organic air plant taxidermy lo-fi fashion axe venmo. Offal pabst vape slow-carb.

This is a [link to `react-markdown-tree-config-default`](https://github.com/rafrex/react-markdown-tree-config-default 'GitHub Repo for React Markdown Tree Config Default') that's used to style this markdown.

Here's an image:
![React Logo](/imgs/react-logo.svg 'React Logo')

1. This is an ordered list starting at 1
1. This is item 2
1. This is item 3

- This is an unordered list
- This is an item
  - This is a sub-list item
    - This is a sub-sub-list item
    - Another item
- This is another item

42. This is an ordered list starting at 42
1. This is item 43
1. This is item 44
    - This is a sub-list of 44
    - Another item
1. This is item 45

> ### This is a BlockQuote
>
> This is a paragraph of hipster text. Microdosing godard organic listicle kitsch, kale chips narwhal tousled jean shorts lumbersexual bespoke skateboard tacos swag. Church-key vinyl butcher austin leggings. Flannel hot chicken hexagon hella +1.
>
> - List item
>
> This is a link to the [React Markdown Tree Repo](https://github.com/rafrex/react-markdown-tree)
>> This is a double BlockQuote
>>> This is a triple BlockQuote
>
> This is `inline code`
>
> ```js
> const MyComponent = () => (
>   <Markdown>
>     # This is so easy to use!
>   </Markdown>
> );
> ```
>

*This has emphasis*

**This is strong**

***This is strong with emphasis***

This is a soft
break

This is a line break, it has 2 spaces at the end of this line  
followed by a new line

This is some `inline code` in the middle of text.

Below is a thematic break

---

Code and concept by [Rafael Pedicini](http://www.rafaelpedicini.com)

[React Markdown Tree](https://github.com/rafrex/react-markdown-tree) is powered by [CommonMark JS](https://github.com/jgm/commonmark.js) and [CommonMark React Renderer](https://github.com/rexxars/commonmark-react-renderer)
