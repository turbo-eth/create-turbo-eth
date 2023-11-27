import { dataConfigPath, exampleDemosPath } from "../../../config"
import type { IntegrationConfig } from "../../../types"

export const arweaveConfig: IntegrationConfig = {
  name: 'Arweave',
    pageDependencies: [
      {
        dependencyPath: dataConfigPath,
        type: 'snippet',
        regexList: [/\n\s*arweave: \{\s*name: "Arweave",[\s\S]*?imgDark: "\/integrations\/arweave-dark.png",\s*\},/g],
      },
      {
        dependencyPath: exampleDemosPath,
        type: 'snippet',
        regexList: [/\n\s*{\s*title: turboIntegrations\.arweave\.name,[\s\S]*?\/>\s*<\/div>\s*\),\s*},/g],
      },
    ],
  dependencies: {
    "arweave": "^1.14.0",
    "arweave-account": "^1.4.0"
  }
}