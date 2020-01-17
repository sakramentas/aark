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
  license,
  directories,
  description,
  dependencies,
  peerDependencies,
}) => ({
  ...(bin && { bin }),
  ...(name && { name }),
  ...(main && { main }),
  ...(files && { files }),
  ...(version && { version }),
  ...(license && { license }),
  ...(directories && { directories }),
  ...(description && { description }),
  ...(dependencies && { dependencies }),
  ...(peerDependencies && { peerDependencies }),
});

module.exports = { generateBuildPackageJson };
