## Document Verification Dashboard SPA
  - [About](#about)
  - [Prerequisites](#prerequisites)
  - [Installation](#installation)
  - [Running Test](#running-test)
  - [Other Documentations](#other-documentations)

***

### About

This project was created for Accredify's Technical Frontend Assessment.

The feature demonstrates a dashboard SPA where users can view and upload verifiable documents. The SPA is used by two types of users: Managed Users, and Personal Users.

Tech Stack: Vue 3, Vite, Typescript, Express.js.

### Installation

#### Recommended IDE Setup

[VSCode](https://code.visualstudio.com/) + [Volar](https://marketplace.visualstudio.com/items?itemName=Vue.volar) (and disable Vetur) + [TypeScript Vue Plugin (Volar)](https://marketplace.visualstudio.com/items?itemName=Vue.vscode-typescript-vue-plugin).

#### Customize configuration

See [Vite Configuration Reference](https://vitejs.dev/config/).

#### Project Setup

```sh
npm install
```

#### Compile and Hot-Reload for Development

```sh
npm run dev
```

#### Type-Check, Compile and Minify for Production

```sh
npm run build
```

***

### Running Test

#### Run Unit Tests with [Vitest](https://vitest.dev/)

```sh
npm run test:unit
```

#### Run End-to-End Tests with [Cypress](https://www.cypress.io/)

```sh
npm run test:e2e:dev
```

This runs the end-to-end tests against the Vite development server.
It is much faster than the production build.

But it's still recommended to test the production build with `test:e2e` before deploying (e.g. in CI environments):

```sh
npm run build
npm run test:e2e
```
*** 

### Styling

#### Lint with [ESLint](https://eslint.org/)

```sh
npm run lint
```

***
### Other Documentations

 - Refactoring or Improvement Plan: `ROADMAP.md`
 - Technical documentations: in `docs/`
    1. `Sequence Diagram.png`
    2. `Verification Flowchart.png`
    3. `Architecture Comparison Table.png`