import { Config } from '@stencil/core';
import { sass } from '@stencil/sass';

import { reactOutputTarget } from '@stencil/react-output-target';

const angularValueAccessorBindings: ValueAccessorConfig[] = [];

import {
  angularOutputTarget,
  ValueAccessorConfig,
} from '@stencil/angular-output-target';

export const config: Config = {
  namespace: 'web-components',
  taskQueue: 'async',
  globalStyle: 'src/global/_global.scss',
  outputTargets: [
    {
      type: 'dist',
      esmLoaderPath: '../loader',
    },
    {
      type: 'dist-custom-elements',
    },
    {
      type: 'docs-readme',
    },
    {
      type: 'www',
      serviceWorker: null, // disable service workers
    },

    reactOutputTarget({
      componentCorePackage: '@io/web-components',
      proxiesFile:
        '../../../packages/web-components-react/src/generated/components.ts',
      includeDefineCustomElements: true,
    }),

    angularOutputTarget({
      componentCorePackage: '@io/web-components',
      directivesProxyFile:
        '../../../packages/web-components-angular/src/generated/directives/proxies.ts',
      directivesArrayFile:
        '../../../packages/web-components-angular/src/generated/directives/index.ts',
      valueAccessorConfigs: angularValueAccessorBindings,
    }),
  ],
  plugins: [sass()]
};
