import { dataConfigPath, exampleDemosPath } from '../../../config'
import type { IntegrationConfig } from '../../../types'

export const starterConfig: IntegrationConfig = {
  name: 'Starter',
  pageDependencies: [
    {
      dependencyPath: dataConfigPath,
      type: 'snippet',
      regexList: [/\n\s*starter: \{\s*name: "Starter Template",[\s\S]*?imgDark: "\/logo-gradient\.png",\s*\},/g],
    },
    {
      dependencyPath: exampleDemosPath,
      type: 'snippet',
      regexList: [/\n\s*{\s*title: turboIntegrations\.starter\.name,[\s\S]*?\/>\s*<\/div>\s*\),\s*},/g],
    },
  ],
}
