#!/usr/bin/env node

const { buildMapping } = require('../src/buildMapping');
const { outputJsonSync, outputFileSync } = require('fs-extra');

outputJsonSync('./output/mapping.json', buildMapping(), { spaces: '\x20\x20\x20\x20' });
outputFileSync('./output/.gitignore', '*');
