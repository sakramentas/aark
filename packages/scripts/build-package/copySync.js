const path = require('path');
const { ensureFileSync, copyFileSync } = require('fs-extra');
const { statSync, readdirSync } = require('fs');

const copyDirRecursive = (srcDir, outDir, filterFn) => {
  const files = readdirSync(srcDir);
  files.forEach(file => {
    const srcFile = path.join(srcDir, file);
    const outFile = path.join(outDir, file);

    if (statSync(srcFile).isDirectory()) {
      copyDirRecursive(srcFile, outFile, filterFn);
    } else if (filterFn(file)) {
      ensureFileSync(outFile);
      copyFileSync(srcFile, outFile);
    }
  });
};

const copySync = (srcDir, outDir, filterFn) => {
  copyDirRecursive(srcDir, outDir, filterFn);
};

module.exports = { copySync };
