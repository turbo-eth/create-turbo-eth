import { z } from 'zod'
import { dataConfigPath, exampleDemosPath } from "../../../config"
import type { IntegrationConfig } from "../../../types"

export const openaiConfig: IntegrationConfig = {
    name: 'OpenAI',
  pageDependencies: [
    {
      dependencyPath: dataConfigPath,
      type: 'snippet',
      regexList: [/\n\s*openai: \{\s*name: "OpenAI",[\s\S]*?imgDark: "\/integrations\/openai-dark.svg",\s*\},/g],
    },
    {
      dependencyPath: exampleDemosPath,
      type: 'snippet',
      regexList: [/\n\s*{\s*title: turboIntegrations\.openai\.name,[\s\S]*?<\/IsDarkTheme>\s*<\/div>\s*\),\s*},/g],
    },
  ],
  env: {
    OPENAI_API_KEY: {
      message: 'What is your OpenAI API Key?',
      instructions: 'You can get your OpenAI API Key at https://platform.openai.com/account/api-keys',
      validate: (input: string) => {
        if (z.string().min(1).safeParse(input).success) {
          return true
        }

        return 'OpenAI API Key is required'
      },
    },
  },
  dependencies: {
    "eventsource-parser": "^1.0.0"
  }
}
