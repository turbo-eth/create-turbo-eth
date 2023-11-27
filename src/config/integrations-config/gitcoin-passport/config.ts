import { dataConfigPath, exampleDemosPath } from '../../../config'
import type { IntegrationConfig } from '../../../types'

export const gitcoinPassportConfig: IntegrationConfig = {
  name: 'Gitcoin Passport',
  pageDependencies: [
    {
      dependencyPath: dataConfigPath,
      type: 'snippet',
      regexList: [/\n\s*gitcoinPassport: \{\s*name: "Gitcoin Passport",[\s\S]*?imgDark: "\/integrations\/gitcoin-passport.svg",\s*\},/g],
    },
    {
      dependencyPath: exampleDemosPath,
      type: 'snippet',
      regexList: [/\n\s*{\s*title: turboIntegrations\.gitcoinPassport\.name,[\s\S]*?\/>\s*<\/div>\s*\),\s*},/g],
    },
  ],
}
