import path from 'path';
import { dir } from 'fs-jetpack';

import { compileFromAarkTemplate } from './helpers/compileFromAarkTemplate';
import config from './config-samples/config_sample_2.json';

// const FILE_EXTENSIONS = {
//   react: '.jsx',
// };

export const initGenerator = () => {
  const { structure = [] } = config;

  structure.forEach(nodeTuple => {
    // When only a string is given.
    // if (typeof folder === 'string') {
    //   write('./test-folder/test-file.js', CONTENT_TO_WRITE);
    // }

    if (Array.isArray(nodeTuple)) {
      const [folderPath, { templateId, type, variables, name }] = nodeTuple;
      const absoluteFolderPath = path.join(__dirname, folderPath);
      console.log('absoluteFolderPath >>>', absoluteFolderPath);

      // Create Folder
      dir(folderPath);

      // Generate files and write content

      if (templateId) {
        // const fileExt = path.fileExtension(file);

        compileFromAarkTemplate(
          '@aark/templates-react',
          { type, templateId, dest: absoluteFolderPath, name },
          variables
        );

        // if (fileExt === FILE_EXTENSIONS[react]) {
        // }

        // write(path.join(folderPath, file), content))
      }
    }
  });
};
