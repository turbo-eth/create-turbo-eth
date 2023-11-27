import { dataConfigPath, exampleDemosPath } from "../../../config"
import type { IntegrationConfig } from "../../../types"

export const sessionKeysConfig: IntegrationConfig = {
  name: 'Session Keys',
  pageDependencies: [
    {
      dependencyPath: dataConfigPath,
      type: 'snippet',
      regexList: [/\n\s*sessionKeys: \{\s*name: "Session Keys",[\s\S]*?imgDark: "\/integrations\/session-keys.png",\s*\},/g],
    },
    {
      dependencyPath: exampleDemosPath,
      type: 'snippet',
      regexList: [/\n\s*{\s*title: turboIntegrations\.sessionKeys\.name,[\s\S]*?<\/IsDarkTheme>\s*<\/div>\s*\),\s*},/g],
    },
  ],
  dependencies: {
    "dexie": "^3.2.3",
    "dexie-react-hooks": "^1.1.3",
}
}

