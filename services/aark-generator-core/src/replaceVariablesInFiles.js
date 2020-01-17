import fs from 'fs';
import path from 'path';
import Mustache from 'mustache';
import { aarkLogger } from '@aark/logger';
import { write, rename } from 'fs-jetpack';

const log = aarkLogger({ origin: 'generator-core' });

/**
 * Replace variables in templates with values given in an Aark Node
 * @param {string} filePath Path where the file is located
 * @param {object} nodeSettings Aark node settings
 * @param {object} nodeSettings.variables Object with variables to be replaced by generator
 * @param {object} nodeSettings.name New entity name
 * @param {string} entityName Current entity name
 */
export const replaceVariablesInFiles = (
  filePath,
  { variables, name = 'Example' },
  entityName
) => {
  const realFileName = path.basename(filePath).replace('.aark', '');
  const fileNameWithoutExt = realFileName.substr(0, realFileName.lastIndexOf('.'));
  let newFileName = realFileName;

  fs.readFile(filePath, 'utf8', (err, data) => {
    if (err) {
      return log('error', err);
    }

    write(filePath, Mustache.render(data, variables, {}, ['<%', '%>']));

    if (realFileName.includes(entityName)) {
      newFileName = realFileName.replace(fileNameWithoutExt, name);
    }
    rename(filePath, newFileName);

    return null;
  });
};
