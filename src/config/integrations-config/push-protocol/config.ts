import { dataConfigPath, exampleDemosPath } from '../../../config'
import type { IntegrationConfig } from '../../../types'

export const pushProtocolConfig: IntegrationConfig = {
  name: 'Push Protocol',
  pageDependencies: [
    {
      dependencyPath: dataConfigPath,
      type: 'snippet',
      regexList: [/\n\s*push_protocol: \{\s*name: "Push Protocol",[\s\S]*?imgDark: "\/integrations\/push.svg",\s*\},/g],
    },
    {
      dependencyPath: exampleDemosPath,
      type: 'snippet',
      regexList: [/\n\s*{\s*title: turboIntegrations\.push_protocol\.name,[\s\S]*?<\/IsDarkTheme>\s*<\/div>\s*\),\s*},/g],
    },
  ],
  dependencies: {
    '@pushprotocol/restapi': '^1.3.9',
    '@pushprotocol/uiweb': '1.0.1',
  },
}
