module.exports = {
  // use ISO 639-1 for lang key
  // https://en.wikipedia.org/wiki/List_of_ISO_639-1_codes
  title: {
    properties: {
      fr: {
        type: 'text',
        analyzer: 'customFrenchAnalyzer',
        fields: {
          normalized: {
            type: 'keyword',
            normalizer: 'title:normalizer',
          },
        },
      },
      en: {
        type: 'text',
        fields: {
          normalized: {
            type: 'keyword',
            normalizer: 'title:normalizer',
          },
        },
      },
      de: {
        type: 'text',
        fields: {
          normalized: {
            type: 'keyword',
            normalizer: 'title:normalizer',
          },
        },
      },
      es: {
        type: 'text',
        fields: {
          normalized: {
            type: 'keyword',
            normalizer: 'title:normalizer',
          },
        },
      },
      default: {
        type: 'text',
        fields: {
          normalized: {
            type: 'keyword',
            normalizer: 'title:normalizer',
          },
        },
      },
    },
  },
  // use ISO 639-1 for lang key
  // https://en.wikipedia.org/wiki/List_of_ISO_639-1_codes
  abstract: {
    properties: {
      fr: {
        type: 'text',
        analyzer: 'customFrenchAnalyzer',
      },
      en: {
        type: 'text',
      },
      de: {
        type: 'text',
      },
      es: {
        type: 'text',
      },
      default: {
        type: 'text',
      },
    },
  },
  erratumOf: {
    type: 'keyword',
  },
  classifications: {
    properties: {
      inist: {
        type: 'keyword',
      },
      scienceMetrix: {
        type: 'keyword',
      },
      scopus: {
        type: 'keyword',
      },
      wos: {
        type: 'keyword',
      },
      enrichments: {
        properties: {
          hal: {
            properties: {
              code: {
                type: 'keyword',
              },
              fr: {
                type: 'text',
                analyzer: 'customFrenchAnalyzer',
                copy_to: 'classifications.hal.fr',
              },
              en: {
                type: 'text',
                copy_to: 'classifications.hal.en',
              },
            },
          },
        },
      },
    },
  },
  fulltextUrl: {
    type: 'keyword',
  },
  funders: {
    properties: {
      grantNumber: {
        type: 'keyword',
      },
      fullname: {
        type: 'text',
        fields: {
          keyword: {
            type: 'keyword',
          },
        },
      },
      doi: {
        type: 'keyword',
      },
    },
  },
  publicationDate: {
    type: 'date',
    ignore_malformed: true,
    format: 'date_optional_time',
    fields: {
      normalized: {
        type: 'keyword',
        normalizer: 'publicationDate:normalizer',
      },
    },
  },
  copyrightDate: {
    type: 'date',
    ignore_malformed: true,
    format: 'date_optional_time',
    fields: {
      normalized: {
        type: 'keyword',
        normalizer: 'publicationDate:normalizer',
      },
    },
  },
  language: {
    type: 'keyword',
  },
  genre: {
    type: 'keyword',
  },
  originalGenre: {
    type: 'keyword',
  },
  corpusName: {
    type: 'keyword',
  },
  source: {
    type: 'keyword',
  },
  sourceId: {
    type: 'keyword',
  },
  sourceUid: {
    type: 'keyword',
  },
  keywords: {
    properties: {
      en: {
        properties: {
          author: {
            type: 'keyword',
          },
          mesh: {
            type: 'keyword',
          },
          teeft: {
            type: 'keyword',
          },
        },
      },
      fr: {
        properties: {
          author: {
            type: 'keyword',
          },
          mesh: {
            type: 'keyword',
          },
          rameau: {
            type: 'keyword',
          },
        },
      },
      de: {
        properties: {
          author: {
            type: 'keyword',
          },
          mesh: {
            type: 'keyword',
          },
        },
      },
      es: {
        properties: {
          author: {
            type: 'keyword',
          },
          mesh: {
            type: 'keyword',
          },
        },
      },
      und: {
        properties: {
          author: {
            type: 'keyword',
          },
          mesh: {
            type: 'keyword',
          },
        },
      },
      other: {
        properties: {
          author: {
            type: 'keyword',
          },
          mesh: {
            type: 'keyword',
          },
        },
      },
    },
  },
  namedEntities: {
    properties: {
      unitex: {
        properties: {
          bibl: {
            type: 'keyword',
          },
          date: {
            type: 'keyword',
          },
          geoName: {
            type: 'keyword',
          },
          orgName: {
            type: 'keyword',
          },
          orgNameFunder: {
            type: 'keyword',
          },
          orgNameProvider: {
            type: 'keyword',
          },
          persName: {
            type: 'keyword',
          },
          placeName: {
            type: 'keyword',
          },
          refBibl: {
            type: 'keyword',
          },
          refUrl: {
            type: 'keyword',
          },
        },
      },
    },
  },
};
