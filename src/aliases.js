const { mapValues, keys } = require('lodash');

const aliasesMapping = {
  PRODUCTION: { production: {} },
  INTEGRATION: { integration: {} },
  TEST: { test: {} },
  BUSINESS: { istex: {} },
};

const aliases = mapValues(aliasesMapping, (mapping) => keys(mapping)?.[0]);

module.exports = { aliases, aliasesMapping };
