import { dataConfigPath, exampleDemosPath } from '../../../config'
import type { IntegrationConfig } from '../../../types'

export const defiLlamaConfig: IntegrationConfig = {
  name: 'DefiLlama',
  pageDependencies: [
    {
      dependencyPath: dataConfigPath,
      type: 'snippet',
      regexList: [/\n\s*defiLlama: \{\s*name: "DefiLlama",[\s\S]*?imgDark: "\/integrations\/defi-llama\.png",\s*\},/g],
    },
    {
      dependencyPath: exampleDemosPath,
      type: 'snippet',
      regexList: [/\n\s*{\s*title: turboIntegrations\.defiLlama\.name,[\s\S]*?\/>\s*<\/div>\s*\),\s*},/g],
    },
  ],
}
