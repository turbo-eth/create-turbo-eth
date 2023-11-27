import { z } from 'zod'
import { dataConfigPath, exampleDemosPath } from '../../../config'
import type { IntegrationConfig } from '../../../types'

export const dicoConfig: IntegrationConfig = {
  name: 'Disco',
  pageDependencies: [
    {
      dependencyPath: dataConfigPath,
      type: 'snippet',
      regexList: [/\n\s*disco: \{\s*name: "Disco",[\s\S]*?imgDark: "\/integrations\/discoDark\.png",\s*\},/g],
    },
    {
      dependencyPath: exampleDemosPath,
      type: 'snippet',
      regexList: [/\n\s*{\s*title: turboIntegrations\.disco\.name,[\S\s]*?href: turboIntegrations\.disco\.href,[\S\s]*?<\/div>\s*\),\s*},/g],
    },
  ],
  env: {
    DISCO_API_KEY: {
      message: 'What is your Disco API Key?',
      instructions: 'You can request your Disco API Key at https://discoxyz.typeform.com/requestapi',
      validate: (input: string) => {
        if (z.string().min(1).safeParse(input).success) {
          return true
        }

        return 'Disco API Key is required'
      },
    },
  },
}
