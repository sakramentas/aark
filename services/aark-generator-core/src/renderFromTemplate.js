import { copy, exists } from 'fs-jetpack';
import path from 'path';
import glob from 'glob';

import { replaceVariablesInFiles } from './replaceVariablesInFiles';

/**
 * Generate files from a pre-existent template
 * @param {string} templatePath Path where the template is located.
 * @param {object} nodeSettings Settings from the current structure node.
 * @param {string} nodeSettings.type Type of the node. E.g: react-component, js-function.
 * @param {string} nodeSettings.templateId Aark template ID. E.g: aark-react/component.
 * @param {object} variables Map with variables to be replaced inside template.
 */
export const renderFromTemplate = async (
  templatePath,
  { type: nodeType = '', templateId, dest, name },
  variables
) => {
  const parsedNodeType = nodeType.substring(nodeType.lastIndexOf('-') + 1);
  const templatePackageDir = path.dirname(
    require.resolve(path.join(templatePath, 'package.json'))
  );
  const templateFolderDir = path.join(templatePackageDir, parsedNodeType);
  const templateSettings = await import(
    path.join(templatePackageDir, 'template.settings.json')
  );

  // If Template folder exists
  if (exists(templateFolderDir)) {
    // Copy the content to the destination.
    copy(templateFolderDir, dest, { overwrite: true });
    // List folder tree
    glob('**/*.aark', { cwd: dest, realpath: true }, (err, files = []) => {
      console.log('er >>>', err);
      console.log('files >>>', files);

      files.forEach(file =>
        replaceVariablesInFiles(file, { variables, name }, templateSettings)
      );
    });
  }

  // dir('new-dir');
  // copy(reactTemplateFiles, templatePath);
};
