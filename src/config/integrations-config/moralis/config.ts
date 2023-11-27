import { z } from 'zod'
import { dataConfigPath, exampleDemosPath } from '../../../config'
import type { IntegrationConfig } from '../../../types'

export const moralisConfig: IntegrationConfig = {
  name: 'Moralis',
  pageDependencies: [
    {
      dependencyPath: dataConfigPath,
      type: 'snippet',
      regexList: [/\n\s*moralis: \{\s*name: "Moralis",[\s\S]*?imgDark: "\/integrations\/moralis.png",\s*\},/g],
    },
    {
      dependencyPath: exampleDemosPath,
      type: 'snippet',
      regexList: [/\n\s*{\s*title: turboIntegrations\.moralis\.name,[\s\S]*?\/>\s*<\/div>\s*\),\s*},/g],
    },
  ],
  env: {
    MORALIS_API_KEY: {
      message: 'What is your Moralis API Key?',
      instructions: 'You can get your Moralis API Key at https://admin.moralis.io/register',
      validate: (input: string) => {
        if (z.string().min(1).safeParse(input).success) {
          return true
        }

        return 'Moralis API Key is required'
      },
    },
  },
  dependencies: {
    '@moralisweb3/common-evm-utils': '^2.22.4',
    moralis: '^2.22.4',
  },
}
