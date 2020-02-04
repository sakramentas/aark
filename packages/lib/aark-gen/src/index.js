import { argv } from 'yargs';
import { initGenerator } from '@aark/generator-core/src';

import { fetchConfig } from './fetchConfig';

const configBody = {
  version: '0.0.1',
  type: 'component',
  variant: 'react',
  structure: [
    [
      'ComponentName',
      {
        type: 'react-component',
        name: 'ComponentName',
        templateId: 'aark-react/component',
        variables: {
          COMPONENT_NAME: 'ComponentName',
        },
      },
    ],
  ],
};

/**
 * Args: type, fromUrl, templateId, name
 */

(async () => {
  try {
    // Config from remote url.
    if (argv.fromUrl) {
      const config = await fetchConfig(argv.fromUrl);

      console.log('called from url', config);
      initGenerator({ config });
    }

    // Creating a React component from Aark CLI.
    if (argv.type && argv.type === 'component') {
      console.log('called from argv >>>>', argv);
      const reactComponentConfig = { ...configBody };

      if (argv.name) {
        reactComponentConfig.structure[0][0] = argv.name;
        reactComponentConfig.structure[0][1].name = argv.name;
        reactComponentConfig.structure[0][1].variables.COMPONENT_NAME = argv.name;
      }

      console.log('config >>', JSON.stringify(reactComponentConfig, null, 2));

      initGenerator({ config: reactComponentConfig });
    }
  } catch (err) {
    throw new Error(err);
  }
})();
