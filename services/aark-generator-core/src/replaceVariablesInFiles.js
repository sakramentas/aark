import { write, rename } from 'fs-jetpack';
import Mustache from 'mustache';
import path from 'path';
import fs from 'fs';

export const replaceVariablesInFiles = (
  filePath,
  { variables, name = 'Example' },
  { componentName }
) => {
  const realFileName = path.basename(filePath).replace('.aark', '');
  const fileNameWithoutExt = realFileName.substr(0, realFileName.lastIndexOf('.'));
  console.log('realFileName <<', realFileName);
  let newFileName = realFileName;

  fs.readFile(filePath, 'utf8', (err, data) => {
    if (err) {
      return console.error(err);
    }

    write(filePath, Mustache.render(data, variables, {}, ['<%', '%>']));

    console.log(
      ' realFileName.indexOf(componentName) ',
      realFileName.includes(componentName)
    );

    if (realFileName.includes(componentName)) {
      newFileName = realFileName.replace(fileNameWithoutExt, name);
    }
    rename(filePath, newFileName);
  });
};
