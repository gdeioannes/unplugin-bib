import { createUnplugin } from 'unplugin';

/**
 * Bundler-agnostic plugin for importing .bib files as strings.
 */
export default createUnplugin(() => {
  const BibRegex = /\.bid\??/;

  return {
    name: 'unplugin-bib',
    resolveId(id: string) {
      if (id.match(BibRegex)) {
        return id;
      }
    },
    transform(src: string, id: string) {
      if (id.endsWith('.bib')) {
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
    const bib = \`${contents}\`;
    export default bib;
  `;
}
