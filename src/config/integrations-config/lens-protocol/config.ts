import { dataConfigPath, exampleDemosPath } from '../../../config'
import type { IntegrationConfig } from '../../../types'

export const lensProtocolConfig: IntegrationConfig = {
  name: 'Lens Protocol',
  pageDependencies: [
    {
      dependencyPath: dataConfigPath,
      type: 'snippet',
      regexList: [/\n\s*lensProtocol: \{\s*name: "Lens Protocol",[\s\S]*?imgDark: "\/integrations\/lensprotocol-dark.svg",\s*\},/g],
    },
    {
      dependencyPath: exampleDemosPath,
      type: 'snippet',
      regexList: [/\n\s*{\s*title: turboIntegrations\.lensProtocol\.name,[\s\S]*?\/>\s*<\/div>\s*\),\s*},/g],
    },
  ],
  dependencies: {
    '@lens-protocol/react-web': '^1.3.0',
    '@lens-protocol/wagmi': '^2.1.0',
  },
}
