import { input, checkbox } from '@inquirer/prompts'
import { providers } from '../../config/providers'

export const selectProviders = async () => {
  const providerEnvVars: Record<string, string> = {}

  let selectedProviders = await checkbox({
    message: 'Which providers would you like to use?',

    choices: Object.entries(providers).map(([value, { name }]) => ({
      value,
      name,
    })),
  })

  if (selectedProviders.length === 0) selectedProviders = ['public']

  for (const selectedProvider of selectedProviders) {
    // @ts-ignore
    const provider = providers[selectedProvider]
    if (!provider.env) continue
    const apiKey = await input({
      message: `What is your ${provider.name} API Key?`,
      transformer: (input: string) => {
        return input.trim()
      },
      validate: (input: string) => {
        if (!input) return 'API key is required'
        return true
      },
    })
    providerEnvVars[provider.env] = apiKey
  }

  return { providerEnvVars, selectedProviders }
}
