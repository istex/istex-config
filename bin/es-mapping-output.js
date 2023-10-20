#!/usr/bin/env node

const { buildMapping } = require('../src/buildMapping');
const { outputJsonSync, outputFileSync } = require('fs-extra');

outputFileSync('./output/.gitignore', '*');
outputJsonSync('./output/mapping.json', buildMapping(), { spaces: '\x20\x20\x20\x20' });
