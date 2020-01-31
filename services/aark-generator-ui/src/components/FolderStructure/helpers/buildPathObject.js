// @flow
type TreeObj = {
  [string]: TreeObj | {},
};

/**
 * Recursively creates an object from a given path.
 * @example
 * buildPathObject('folder/subfolder/another-folder')
 * { folder: { subfolder: { 'another-folder': {} } } }
 * @param {Array<string>} pathArray Folder path represented in an Array
 * @param {Object} tree Folder tree object
 */
export const buildPathObject = (
  pathArray: string[] = [],
  tree: TreeObj = {}
): TreeObj => {
  const treeCopy: TreeObj = { ...tree };

  if (pathArray.length) {
    treeCopy[pathArray[0]] = buildPathObject(pathArray.slice(1), treeCopy[pathArray[0]]);
  }

  return treeCopy;
};
