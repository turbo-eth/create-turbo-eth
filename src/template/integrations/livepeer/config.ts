import { z } from 'zod'
import { dataConfigPath, exampleDemosPath } from "../../../config"
import type { IntegrationConfig } from "../../../types"

export const livepeerConfig: IntegrationConfig = {
  name: 'Livepeer',
  pageDependencies: [
    {
      dependencyPath: dataConfigPath,
      type: 'snippet',
      regexList: [/\n\s*livepeer: \{\s*name: "Livepeer",[\s\S]*?imgDark: "\/integrations\/livepeer.svg",\s*\},/g],
    },
    {
      dependencyPath: exampleDemosPath,
      type: 'snippet',
      regexList: [/\n\s*{\s*title: turboIntegrations\.livepeer\.name,[\s\S]*?<\/IsDarkTheme>\s*<\/div>\s*\),\s*},/g],
    },
  ],
  env: {
    NEXT_PUBLIC_LIVEPEER_API_KEY: {
      message: 'What is your Livepeer API Key?',
      instructions: 'You can get your Livepeer API Key at https://livepeer.studio/',
      validate: (input: string) => {
        if (z.string().min(1).safeParse(input).success) {
          return true
        }

        return 'Livepeer API Key is required'
      },
    },
  },
  dependencies: {
    "@livepeer/react": "^2.6.0",
    "react-dropzone": "^14.2.3"
  }
}
