module.exports = {
  index: {
    number_of_replicas: '0',
    number_of_shards: '5',
    similarity: {
      istex_similarity_default: {
        type: 'BM25',
        b: 0.75,
        k1: 1.2,
      },
    },
    analysis: {
      char_filter: {
        whitespace_remove: {
          type: 'pattern_replace',
          pattern: '\\s+',
          replacement: '',
        },
        punctuation_remove: {
          type: 'pattern_replace',
          pattern: '\\p{P}',
          replacement: '',
        },
        num: {
          type: 'pattern_replace',
          pattern: '[^0-9]',
          replacement: '',
        },
        spacenum: {
          type: 'pattern_replace',
          pattern: '[^0-9]',
          replacement: '_',
        },
        firstnum: {
          type: 'pattern_replace',
          pattern: '^[_]*([0-9]+)[_]*.*',
          replacement: '$1',
        },
        year: {
          type: 'pattern_replace',
          pattern: '.*([0-9]{4}).*',
          replacement: '$1',
        },
        alphanum: {
          type: 'pattern_replace',
          pattern: '[^0-9a-zA-Z]',
          replacement: '',
        },
        remove_underscore: {
          type: 'pattern_replace',
          pattern: '[_]',
          replacement: '',
        },
      },
      filter: {
        placeholders: {
          pattern: '^_placeholder_[a-z]+_$',
          type: 'pattern_replace',
          replacement: '',
        },
        piiNormalizer: {
          pattern: '[\\(\\)\\/-]',
          type: 'pattern_replace',
          replacement: '',
        },
        english_stop: {
          type: 'stop',
          stopwords: '_english_',
        },
        english_stemmer: {
          type: 'stemmer',
          language: 'english',
        },
        english_possessive_stemmer: {
          type: 'stemmer',
          language: 'possessive_english',
        },
        french_elision: {
          type: 'elision',
          articles_case: true,
          articles: [
            'l',
            'm',
            't',
            'qu',
            'n',
            's',
            'j',
            'd',
            'c',
            'jusqu',
            'quoiqu',
            'lorsqu',
            'puisqu',
          ],
        },
        french_stop: {
          type: 'stop',
          ignore_case: false,
          stopwords: '_french_',
        },
        french_stemmer: {
          type: 'stemmer',
          language: 'light_french',
        },
        my_asciifolding: {
          type: 'asciifolding',
          preserve_original: false,
        },
      },
      analyzer: {
        default: {
          tokenizer: 'icu_tokenizer',
          char_filter: [
            'icu_normalizer',
          ],
          filter: [
            'english_possessive_stemmer',
            'lowercase',
            'english_stop',
            'english_stemmer',
          ],
        },
        customFrenchAnalyzer: {
          tokenizer: 'icu_tokenizer',
          char_filter: [
            'icu_normalizer',
          ],
          filter: [
            'french_elision',
            'lowercase',
            'french_stop',
            'french_stemmer',
          ],
        },
        piiAnalyzer: {
          type: 'custom',
          tokenizer: 'keyword',
          filter: [
            'lowercase',
            'piiNormalizer',
          ],
        },
        lowercaseAnalyzer: {
          type: 'custom',
          tokenizer: 'keyword',
          filter: 'lowercase',
        },
        placeholderAnalyzer: {
          filter: [
            'english_stop',
            'lowercase',
            'placeholders',
          ],
          type: 'custom',
          tokenizer: 'standard',
        },
      },
      normalizer: {
        'title:normalizer': {
          type: 'custom',
          char_filter: [
            'whitespace_remove',
            'punctuation_remove',
          ],
          filter: [
            'lowercase',
            'my_asciifolding',
            'icu_normalizer',
          ],
        },
        'author:normalizer': {
          type: 'custom',
          char_filter: [
            'whitespace_remove',
            'punctuation_remove',
          ],
          filter: [
            'lowercase',
            'my_asciifolding',
            'icu_normalizer',
          ],
        },
        'id:normalizer': {
          type: 'custom',
          char_filter: [
            'alphanum',
          ],
          filter: [
            'lowercase',
          ],
        },
        'volpage:normalizer': {
          type: 'custom',
          char_filter: [
            'spacenum',
            'firstnum',
            'remove_underscore',
          ],
        },
        'issue:normalizer': {
          type: 'custom',
          char_filter: [
            'num',
          ],
        },
        'publicationDate:normalizer': {
          type: 'custom',
          char_filter: [
            'year',
          ],
        },
      },
    },
  },
};
