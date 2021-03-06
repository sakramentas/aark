import path from 'path';
import glob from 'glob';
import { copy, exists } from 'fs-jetpack';
import { aarkLogger } from '@aark/logger';

import { getTemplateSettings } from '../../helpers/getTemplateSettings';
import { replaceVariablesInFiles } from '../../helpers/replaceVariablesInFiles';

const log = aarkLogger({ origin: 'generator-core' });

/**
 * Template Factory for React
 * @param {string} type Type of React function. E.g: "react-component", "react-container"
 * @param {string} templatePath Path where the Aark compatible React template is located
 * @param {string} dest Path where the files should be generated
 */
export const reactFactory = async (
  templatePath,
  { type, templateId, dest, name },
  variables
) => {
  const compiledFiles = [];
  const reactNodeType = type.replace('react-', '');
  const reactTemplatePackageDir = path.dirname(
    require.resolve(path.join(templatePath, 'package.json'))
  );
  const reactTemplateFolderDir = path.join(reactTemplatePackageDir, reactNodeType);
  const templateSettings = await getTemplateSettings(reactTemplatePackageDir);

  if (!exists(reactTemplateFolderDir)) {
    log('error', `React Template not found in: ${reactTemplateFolderDir}`);
  }

  // Copy the content to the destination.
  copy(reactTemplateFolderDir, dest, { overwrite: true });
  log('info', `Copied "${type}" template to your local project...`);

  // List folder tree in destination.
  return glob('**/*.aark', { cwd: dest, realpath: true }, (error, files = []) => {
    if (error) return log.error('Aark', error);

    files.forEach(file => {
      replaceVariablesInFiles(file, { variables, name }, templateSettings.componentName);
      compiledFiles.push(file);
    });
    log('info', `Replaced variables "${Object.keys(variables)}" inside the files...`);

    return log('info', `Files generated successfully: ${compiledFiles.join('\n')}`);
  });
};
