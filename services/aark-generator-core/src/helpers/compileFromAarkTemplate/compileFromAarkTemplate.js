import log from 'npmlog';
import { reactFactory } from '../../factories/reactFactory';

const AARK_NODE_TYPES = {
  'react-component': reactFactory,
};

/**
 * Generate files from a pre-existent template
 * @param {string} templatePath Path where the template is located.
 * @param {object} nodeSettings Settings from the current structure node.
 * @param {string} nodeSettings.type Type of the node. E.g: react-component, js-function.
 * @param {string} nodeSettings.templateId Aark template ID. E.g: aark-react/component.
 * @param {object} variables Map with variables to be replaced inside template.
 */
export const compileFromAarkTemplate = async (
  templatePath,
  { type: nodeType = '', templateId, dest, name },
  variables
) => {
  const templateFactory = AARK_NODE_TYPES[nodeType];

  if (!templateFactory) {
    throw new Error(
      log.error(
        `Template not found for the node of type: ${nodeType}. Please enter a valid Aark template type.`
      )
    );
  }

  return templateFactory(
    templatePath,
    { type: nodeType, templateId, dest, name },
    variables
  );
};
