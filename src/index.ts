import { createUnplugin } from 'unplugin';

/**
 * Bundler-agnostic plugin for importing .bid files as strings.
 */
export default createUnplugin(() => {
  const BidRegex = /\.bid\??/;

  return {
    name: 'unplugin-bid',
    resolveId(id: string) {
      if (id.match(BidRegex)) {
        return id;
      }
    },
    transform(src: string, id: string) {
      if (id.endsWith('.bid')) {
        const contents = String.raw`${src}`;

        return {
          code: getCode(contents),
          map: null,
        };
      }
    },
  };
});

function getCode(contents: string) {
  return `
    const bid = \`${contents}\`;
    export default bid;
  `;
}
