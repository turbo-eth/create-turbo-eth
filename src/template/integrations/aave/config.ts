import { dataConfigPath, exampleDemosPath } from "../../../config"
import type { IntegrationConfig } from "../../../types"

export const aaveConfig: IntegrationConfig = {
  name: 'Aave V3',
  pageDependencies: [
    {
      dependencyPath: dataConfigPath,
      type: 'snippet',
      regexList: [/\n\s*aave: \{\s*name: "Aave",[\s\S]*?imgDark: "\/integrations\/aave.png",\s*\},/g],
    },
    {
      dependencyPath: exampleDemosPath,
      type: 'snippet',
      regexList: [/\n\s*{\s*title: turboIntegrations\.aave\.name,[\s\S]*?\/>\s*<\/div>\s*\),\s*},/g],
    },
  ],
  dependencies: {
    "@bgd-labs/aave-address-book": "^1.30.0"
  }
}
