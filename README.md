# React Component Dev

[Live Example for SomeComponent](http://react-component-dev.rafrex.com)

Minimalistic boilerplate for creating a React component
- Component development in the `master` branch
- Example app that demonstrates the component in the `gh-pages` branch
- Clone the two branches into separate directories and link the component via `npm link`
  - Run `$ npm run dev` in the `master` branch and `$ npm run start-local` in the `gh-pages` branch
  - When done, unlink the component - run `$ npm unlink` in the `master` branch and `$ npm run unlink` in the `gh-pages` branch
- Replace instances of `some-component` with the new component's name in `package.json` and `webpack.config.js`
