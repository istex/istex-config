const { assign, merge, _ } = require('lodash');
const mappings = require('./mapping/mappings/mappings');
const settings = require('./mapping/settings/settings');
const dynamicTemplates = require('./mapping/mappings/dynamicTemplates');
const authors = require('./mapping/mappings/properties/authors');
const host = require('./mapping/mappings/properties/host');
const technical = require('./mapping/mappings/properties/technical');
const business = require('./mapping/mappings/properties/business');
const files = require('./mapping/mappings/properties/files');
const enrichments = require('./mapping/mappings/properties/enrichments');
const qualityIndicators = require('./mapping/mappings/properties/qualityIndicators');
const identifiers = require('./mapping/mappings/properties/root/identifiers');
const metadata = require('./mapping/mappings/properties/root/metadata');
const fulltext = require('./mapping/mappings/properties/root/fulltext');

module.exports = { buildMapping };

function buildMapping () {
  return {
    mappings: _buildMappings(),
    settings,
  };
}

function _buildMappings () {
  return assign({}, mappings, dynamicTemplates, {
    properties: merge(
      _sort(metadata),
      _sort(identifiers),
      fulltext,
      qualityIndicators,
      business,
      technical,
      authors,
      host,
      files,
      enrichments,
    ),
  });
}

function _sort (collection) {
  return _(collection).toPairs().sortBy().fromPairs().value();
}
