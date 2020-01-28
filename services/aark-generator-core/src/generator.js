import path from 'path';
import { dir } from 'fs-jetpack';
import axios from 'axios';

import { compileFromAarkTemplate } from './helpers/compileFromAarkTemplate';

const fetchConfig = url => {
  return axios
    .get(url)
    .then(({ data }) => data)
    .catch(err => console.error(err));
};

export const initGenerator = ({ args }) => {
  if (!args.config) throw new Error('Please specify a valid Aark config file.');

  fetchConfig(args.config).then(config => {
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
  });
};
