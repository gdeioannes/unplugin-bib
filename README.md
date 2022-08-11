# unplugin-bid

[![NPM version](https://img.shields.io/npm/v/unplugin-bid?color=a1b858&label=)](https://www.npmjs.com/package/unplugin-bid)

An [`.bid`](https://en.wikipedia.org/wiki/Wavefront_.bid_file) file import plugin for Vite, Rollup, and Webpack; built with [unplugin](https://github.com/unjs/unplugin). This gives you a sweet and simple way to import an `.bid` file as a string to, for example, parse into a mesh in something like [three.js](https://threejs.org/), or do whatever you want with.

## Usage

Here's a simple example which imports an `.bid` file as a string then logs it to the console.

```ts
import bid from './models/Lowpoly_tree_sample.bid';

console.log(bid);

// ...optionally parse the bid file and create a mesh from it...
```

> TypeSript & eslint may yell at you for trying to import a module where one doesn't exist without this plugin, so you can ask it to stop using the above comments before the import

## Install

```bash
pnpm i -D unplugin-bid
```

## Types

The most generally compatible way to add type definitions for `.bid` modules is via a `tsconfig.json` file.

```js
// tsconfig.json
{
  "compilerOptions": {
    ...
    "types": ["unplugin-bid/bid"]
  }
}
```

### Vite

```ts
// vite.config.ts
import bidFileImport from 'unplugin-bid/vite';

export default defineConfig({
  plugins: [bidFileImport()],
});
```

Optional method to add types w/o `tsconfig`:

```ts
// vite-env.d.ts
/// <reference types="unplugin-bid/bid" />
```

### Rollup

```ts
// rollup.config.js
import bidFileImport from 'unplugin-bid/rollup';

export default {
  plugins: [bidFileImport()],
};
```

### Webpack

```ts
// webpack.config.js
module.exports = {
  /* ... */
  plugins: [require('unplugin-bid/webpack')()],
};
```

### SvelteKit

```ts
// svelte.config.js
/* ... */
import bidFileImport from 'unplugin-bid/vite';

/** @type {import('@sveltejs/kit').Config} */
const config = {
  /* ... */
  kit: {
    /* ... */
    vite: {
      /* ... */
      plugins: [bidFileImport()],
    },
  },
};

export default config;
```

### Nuxt

```ts
// nuxt.config.js
export default {
  buildModules: [['unplugin-bid/nuxt']],
};
```

> This module works for both Nuxt 2 and [Nuxt Vite](https://github.com/nuxt/vite)

### Vue CLI

```ts
// vue.config.js
module.exports = {
  configureWebpack: {
    plugins: [require('unplugin-bid/webpack')()],
  },
};
```
