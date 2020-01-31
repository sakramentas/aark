// @flow
import * as React from 'react';
import { TreeItem } from '@material-ui/lab';

type TreeObject = {
  [string]: TreeObject | {},
};

/**
 * Recursively generates a TreeItem component tree from a tree object
 * @param {Object} treeObj Folder tree object
 * @param {Number} currentNodeId Current Item Node ID
 */
export const generateTreeItems = (
  treeObj: TreeObject = {},
  currentNodeId: number = 0
): Array<React.Element<any> | React.Node> => {
  const currentNodeIdString: string = currentNodeId.toString();

  return Object.keys(treeObj).map((childKey: string): React.Element<any> | React.Node => {
    const childObj: TreeObject = treeObj[childKey];

    if (!Object.keys(childObj).length) {
      return <TreeItem nodeId={currentNodeIdString} label={childKey} key={childKey} />;
    }

    return (
      <TreeItem nodeId={currentNodeIdString} label={childKey} key={childKey}>
        {generateTreeItems(childObj, currentNodeId + 1)}
      </TreeItem>
    );
  });
};
