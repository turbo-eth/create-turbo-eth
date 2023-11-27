import { dataConfigPath, exampleDemosPath } from '../../../config'
import type { IntegrationConfig } from '../../../types'

export const gelatoConfig: IntegrationConfig = {
  name: 'Gelato',
  pageDependencies: [
    {
      dependencyPath: dataConfigPath,
      type: 'snippet',
      regexList: [/\n\s*gelato: \{\s*name: "Gelato",[\s\S]*?imgDark: "\/integrations\/gelato-light.svg",\s*\},/g],
    },
    {
      dependencyPath: exampleDemosPath,
      type: 'snippet',
      regexList: [/\n\s*{\s*title: turboIntegrations\.gelato\.name,[\s\S]*?<\/IsDarkTheme>\s*<\/div>\s*\),\s*},/g],
    },
  ],
  dependencies: {
    '@gelatonetwork/automate-sdk': '^2.14.0',
    '@graphql-typed-document-node/core': '^3.2.0',
    abitype: '^0.9.6',
    'graphql-request': '^6.1.0',
  },
}
