#!/usr/bin/env node
const path = require('path');
const { argv } = require('yargs');
const { writeJsonSync } = require('fs-extra');
const { spawnSync } = require('child_process');
const { generateBuildPackageJson } = require('./generateBuildPackageJson');

process.env.BABEL_ENV = 'production';
process.env.NODE_ENV = 'production';

process.on('unhandledRejection', err => {
  throw err;
});

const buildPackage = () => {
  const nodeArgs = [];
  const srcDir = path.resolve(process.cwd(), argv.srcDir || 'src');
  const outDir = path.resolve(process.cwd(), argv.outDir || 'build');
  const defaultIgnorePattern = [
    `node_modules`,
    `coverage`,
    `jest-cache`,
  ];

  nodeArgs.push(srcDir);
  nodeArgs.push('--out-dir', outDir);
  nodeArgs.push('--copy-files');
  nodeArgs.push('--presets', '@aark/babel-preset/node');
  nodeArgs.push('--ignore', argv.ignore || defaultIgnorePattern.join(','));

  const { signal: spawnResultSignal, status: spawnResultStatus } = spawnSync(
    'babel',
    nodeArgs,
    {
      stdio: 'inherit',
    }
  );

  // eslint-disable-next-line import/no-dynamic-require
  const packageJson = require(path.resolve(process.cwd(), 'package.json'));
  const buildPackageJson = generateBuildPackageJson(packageJson);

  writeJsonSync(path.join(outDir, 'package.json'), buildPackageJson, {
    spaces: 2,
  });


  if (spawnResultSignal) {
    if (spawnResultSignal === 'SIGKILL' || spawnResultSignal === 'SIGTERM') {
      // eslint-disable-next-line no-console
      console.log('Build failed. Shutting down process...');
    }
    process.exit(1);
  }

  process.exit(spawnResultStatus);
};

buildPackage();