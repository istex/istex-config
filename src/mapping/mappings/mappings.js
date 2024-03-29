const { version, name } = require('../../../package.json');

module.exports = {
  dynamic: 'strict',
  _source: {
    excludes: [
      'fulltext',
      'figure',
      'table',
      'docObject',
    ],
  },
  _meta: {
    version,
    name,
  },
};
