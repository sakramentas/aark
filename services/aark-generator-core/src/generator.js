import path from 'path';
import { write, dir, copy } from 'fs-jetpack';

import { componentTemplate } from './templates/aark-react/component/Component.template';

import config from './config-samples/config_sample_2.json';

console.log('confg >>', config);

const FILE_EXTENSIONS = {
  react: '.jsx',
};

const renderFromTemplate = (filePath, { type: nodeType, template }, variables) => {
  const templatePath = `./templates/${template}`;
  const reactTemplateFiles = `${templatePath}/Component.jsx.aark`;
  console.log('COPYING FILE', reactTemplateFiles);

  dir('new-dir');
  copy(reactTemplateFiles, filePath);
};

export const initGenerator = () => {
  const { structure = [] } = config;

  structure.forEach(nodeTuple => {
    // When only a string is given.
    // if (typeof folder === 'string') {
    //   write('./test-folder/test-file.js', CONTENT_TO_WRITE);
    // }

    if (Array.isArray(nodeTuple)) {
      const [folderPath, { files = [], template, type, variables }] = nodeTuple;

      // Create Folder
      dir(folderPath);

      // Generate files and write content
      files.forEach(file => {
        if (template) {
          // const fileExt = path.fileExtension(file);
          const fullFilePath = path.join(folderPath, file);

          renderFromTemplate(fullFilePath, { type, template }, variables);

          // if (fileExt === FILE_EXTENSIONS[react]) {
          // }
        }

        // write(path.join(folderPath, file), content))
      });
    }
  });
};
