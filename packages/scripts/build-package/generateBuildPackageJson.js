/**
 * Generates a new smaller package.json for the package build.
 * @param {Object} packageJsonKeys Keys from original package.json
 */
const generateBuildPackageJson = ({
  bin,
  name,
  main,
  files,
  author,
  version,
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
  ...(author && { author }),
  ...(version && { version }),
  ...(license && { license }),
  ...(directories && { directories }),
  ...(description && { description }),
  ...(dependencies && { dependencies }),
  ...(publishConfig && { publishConfig: { access: publishConfig.access } }),
  ...(peerDependencies && { peerDependencies }),
});

module.exports = { generateBuildPackageJson };
