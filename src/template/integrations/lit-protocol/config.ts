import { dataConfigPath, exampleDemosPath } from "../../../config"
import type { IntegrationConfig } from "../../../types"

export const litProtocolConfig: IntegrationConfig = {
  name: 'Lit Protocol',
  pageDependencies: [
    {
      dependencyPath: dataConfigPath,
      type: 'snippet',
      regexList: [/\n\s*litProtocol: \{\s*name: "Lit Protocol",[\s\S]*?imgDark: "\/integrations\/lit-protocol.png",\s*\},/g],
    },
    {
      dependencyPath: exampleDemosPath,
      type: 'snippet',
      regexList: [/\n\s*{\s*title: turboIntegrations\.litProtocol\.name,[\s\S]*?<\/IsDarkTheme>\s*<\/div>\s*\),\s*},/g],
    },
  ],
  dependencies :{
    "@lit-protocol/lit-node-client": "2.1.161",
  }
}

