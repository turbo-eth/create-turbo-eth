import { dataConfigPath, exampleDemosPath } from '../../../config'
import type { IntegrationConfig } from '../../../types'

export const connextConfig: IntegrationConfig = {
  name: 'Connext',
  pageDependencies: [
    {
      dependencyPath: dataConfigPath,
      type: 'snippet',
      regexList: [/\n\s*connext: \{\s*name: "Connext",[\s\S]*?imgDark: "\/integrations\/connext.png",\s*\},/g],
    },
    {
      dependencyPath: exampleDemosPath,
      type: 'snippet',
      regexList: [/\n\s*{\s*title: turboIntegrations\.connext\.name,[\s\S]*?<\/IsDarkTheme>\s*<\/div>\s*\),\s*},/g],
    },
  ],
  dependencies: {
    '@connext/sdk': '2.0.4-alpha.2',
  },
}
