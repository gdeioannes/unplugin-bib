# unplugin-bib

[![NPM version](https://img.shields.io/npm/v/unplugin-bib?color=a1b858&label=)](https://www.npmjs.com/package/unplugin-bib)

An [`.bib`](https://en.wikipedia.org/wiki/BibTeX) file import plugin for Vite, Rollup, and Webpack; built with [unplugin](https://github.com/unjs/unplugin and https://github.com/tonyketcham/unplugin-obj https://github.com/antfu). This gives you a sweet and simple way to import an `.bib` file as a string to.

## Usage

Here's a simple example which imports an `.bib` file as a string then logs it to the console.

```ts
import bib from './file.bib';

console.log(bib);

// ...optionally parse the bib file and create a mesh from it...
```

> TypeSript & eslint may yell at you for trying to import a module where one doesn't exist without this plugin, so you can ask it to stop using the above comments before the import

## Install

```bash
pnpm i -D unplugin-bib
```

## Types

The most generally compatible way to add type definitions for `.bib` modules is via a `tsconfig.json` file.

```js
// tsconfig.json
{
  "compilerOptions": {
    ...
    "types": ["unplugin-bib/bib"]
  }
}
```

### Vite

```ts
// vite.config.ts
import bibFileImport from 'unplugin-bib/vite';

export default defineConfig({
  plugins: [bibFileImport()],
});
```

Optional method to add types w/o `tsconfig`:

```ts
// vite-env.d.ts
/// <reference types="unplugin-bib/bib" />
```

### Rollup

```ts
// rollup.config.js
import bibFileImport from 'unplugin-bib/rollup';

export default {
  plugins: [BibFileImport()],
};
```

### Webpack

```ts
// webpack.config.js
module.exports = {
  /* ... */
  plugins: [require('unplugin-bib/webpack')()],
};
```

### SvelteKit

```ts
// svelte.config.js
/* ... */
import bibFileImport from 'unplugin-bib/vite';

/** @type {import('@sveltejs/kit').Config} */
const config = {
  /* ... */
  kit: {
    /* ... */
    vite: {
      /* ... */
      plugins: [bibFileImport()],
    },
  },
};

export default config;
```

### Nuxt

```ts
// nuxt.config.js
export default {
  buildModules: [['unplugin-bib/nuxt']],
};
```

> This module works for both Nuxt 2 and [Nuxt Vite](https://github.com/nuxt/vite)

### Vue CLI

```ts
// vue.config.js
module.exports = {
  configureWebpack: {
    plugins: [require('unplugin-bib/webpack')()],
  },
};
```
