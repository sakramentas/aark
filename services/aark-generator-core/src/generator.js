import path from 'path';
import { dir } from 'fs-jetpack';

import { compileFromAarkTemplate } from './helpers/compileFromAarkTemplate';

export const initGenerator = ({ config }) => {
  if (!config) throw new Error('Please specify a valid Aark config file.');

  const { structure = [] } = config;

  structure.forEach(nodeTuple => {
    if (Array.isArray(nodeTuple)) {
      const [folderPath, { templateId, type, variables, name }] = nodeTuple;
      const absoluteFolderPath = path.join(process.cwd(), folderPath);

      // Create Folder
      dir(folderPath);

      // Generate files and write content
      if (templateId) {
        compileFromAarkTemplate(
          '@aark/templates-react',
          { type, templateId, dest: absoluteFolderPath, name },
          variables
        );
      }
    }
  });
};
