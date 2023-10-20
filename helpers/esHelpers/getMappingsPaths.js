const jq = require('node-jq');
const _ = require('lodash');

const esMappingParameters = ['analyzer', 'coerce', 'copy_to', 'doc_values', 'dynamic', 'eager_global_ordinals', 'enabled', 'format', 'ignore_above', 'ignore_malformed', 'index', 'index_options', 'index_phrases', 'index_prefixes', 'meta', /* 'fields', */ 'normalizer', 'norms', 'null_value', 'position_increment_gap', 'properties', 'search_analyzer', 'similarity', 'store', 'term_vector', 'type'];

module.exports = { getMappingsPaths };

async function getMappingsPaths (mapping) {
  return jq.run('.properties|path(..)', mapping, { input: 'json', output: 'compact' })
    .then((result) => {
      return _.chain(result)
        .split('\n')
        .map((value) =>
          _.chain(JSON.parse(value))
            .reduce((accu, value, index, collection) => {
              if (collection[index - 1] !== 'properties' && esMappingParameters.includes(value)) return accu;
              accu.push(value);
              return accu;
            },
            [])
            .reject(isNumeric)
            .join('.')
            .value(),
        )
        .compact()
        .uniq()
        .reject((value, index, array) => {
          const next = array[index + 1];
          if (_.includes(next, 'fields')) return false;
          return _.startsWith(next, value + '.');
        })
        .map((value) => _.replace(value, '.fields', ''))
        .uniq()
        .value();
    });
}

function isNumeric (n) {
  return !isNaN(parseFloat(n)) && isFinite(n);
}
