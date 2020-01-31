// @flow
import { merge } from 'lodash';
import { buildPathObject } from './buildPathObject';

// TODO: Move shared types to a shared lib.
export type TreeObject = {
  [string]: TreeObject | {},
};

export type AarkConfigNodeSettings = {
  type: string,
  name: string,
  templateId: string,
  variables?: {
    [string]: mixed,
  },
};

export type AarkConfigStructure = Array<[string, AarkConfigNodeSettings]>;

/**
 * Traverses a Aark config structure Array, collecting all the paths and returns a object
 * with the exact folder structure representation
 * @param {Array} structure Structure Array from Aark generator config JSON
 */
export const generateFolderTreeObject = (
  structure: AarkConfigStructure = []
): TreeObject => {
  const tree: TreeObject = {};

  structure.forEach(([path: string]) => {
    const pathArray: string[] = path.split('/');

    return merge(tree, buildPathObject(pathArray));
  });

  return tree;
};
