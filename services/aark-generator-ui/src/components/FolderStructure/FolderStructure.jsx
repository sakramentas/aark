import * as React from 'react';

import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import TreeView from '@material-ui/lab/TreeView';

import {
  generateTreeItems,
  AarkConfigStructure,
  generateFolderTreeObject,
} from './helpers';
import type { TreeObj } from './helpers';

export const FolderStructure = ({
  structure,
}: {
  structure: AarkConfigStructure,
}): React.Element<any> => {
  const folderTreeObject: TreeObj = generateFolderTreeObject(structure);
  const elementsTree: Array<React.Element<any> | React.Node> = generateTreeItems(
    folderTreeObject
  );

  return (
    <div className="grid-y">
      <TreeView
        defaultCollapseIcon={<ExpandMoreIcon />}
        defaultExpandIcon={<ChevronRightIcon />}
      >
        {elementsTree}
      </TreeView>
    </div>
  );
};
