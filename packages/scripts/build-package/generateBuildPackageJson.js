/**
 * Generates a new smaller package.json for the package build.
 * @param {Object} packageJsonKeys Keys from original package.json
 */
const generateBuildPackageJson = ({
  bin,
  name,
  main,
  files,
  version,
  scripts,
  license,
  directories,
  description,
  dependencies,
  publishConfig,
  peerDependencies,
}) => ({
  ...(bin && { bin }),
  ...(name && { name }),
  ...(main && { main }),
  ...(files && { files }),
  ...(version && { version }),
  ...(scripts && { scripts }),
  ...(license && { license }),
  ...(directories && { directories }),
  ...(description && { description }),
  ...(dependencies && { dependencies }),
  ...(publishConfig && { publishConfig }),
  ...(peerDependencies && { peerDependencies }),
});

module.exports = { generateBuildPackageJson };
