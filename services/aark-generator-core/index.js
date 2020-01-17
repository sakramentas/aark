#!/usr/bin/env node
require('dotenv').config({});

require('@babel/register')({
  presets: ['@aark/babel-preset/node'],
  include: ['../../node_modules'],
});

require('./src');
