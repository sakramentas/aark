import path from 'path';
import log from 'npmlog';

/**
 * Gets the template settings file
 * @param {string} templatePath Path where the template is located
 */
export const getTemplateSettings = async templatePath => {
  const templateSettings = await import(
    path.join(templatePath, 'template.settings.json')
  );

  if (!templateSettings) {
    log.warn(
      'Aark',
      `template.settings.json not found for this template. Aark will still generate the
       files but it might not match the names given in the config.`
    );
  }

  return templateSettings;
};
