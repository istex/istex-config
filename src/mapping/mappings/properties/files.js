const mimeProperty = {
  type: 'text',
  fields: {
    keyword: {
      type: 'keyword',
    },
  },
};
const originalProperty = {
  type: 'boolean',
  index: false,
};
const pathPropery = {
  type: 'text',
  index: false,
};
const commonFilePart = {
  mime: mimeProperty,
  original: originalProperty,
  path: pathPropery,
};
const filesProperty = {
  files: {
    properties: {
      metadata: {
        properties: {
          mime: mimeProperty,
          original: originalProperty,
          partOfSet: {
            type: 'text',
            index: false,
          },
          path: pathPropery,
          valFile: {
            type: 'text',
            index: false,
          },
          xmlValid: {
            type: 'boolean',
            index: false,
          },
          xmlWellFormed: {
            type: 'boolean',
            index: false,
          },
        },
      },
      fulltext: {
        properties: commonFilePart,
      },
      annexes: {
        properties: commonFilePart,
      },
      covers: {
        properties: commonFilePart,
      },
      index: {
        properties: {
          mime: mimeProperty,
          path: pathPropery,
        },
      },
      enrichments: {
        properties: {},
      },
    },
  },
};

['grobidFulltext', 'grobid', 'hubMeta', 'keyterm', 'multicat', 'mesh', 'nb', 'nerd', 'refBibs', 'teeft', 'unitex', 'ocr']
  .forEach(enrichName => {
    filesProperty.files.properties.enrichments.properties[enrichName] = {
      properties: commonFilePart,
    };
  });

module.exports = filesProperty;
