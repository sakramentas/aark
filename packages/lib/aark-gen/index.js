#!/usr/bin/env node

if (process.env.NODE_ENV !== 'production') {
  require('@babel/register')({
    cache: false,
    presets: ['@aark/babel-preset/node'],
    include: ['../../node_modules', 'node_modules'],
  });
}

require('./src');
