import chalk from 'chalk'
import {checkbox, input} from '@inquirer/prompts'
import {integrationOptions} from '../../config/integrations'
import type {AvailableIntegration} from '../../types'

export const selectIntegrations = async () => {
  const integrationEnvVars: Record<string, string> = {}

  const selectedIntegrations: string[] = await checkbox({
    message: 'Which integrations would you like to add?',
    choices: Object.entries(integrationOptions).map(([value, {name}]) => ({
      name,
      value,
    }),
    )},
  )

  for (const integration of selectedIntegrations as AvailableIntegration[]) {
    const envVars = integrationOptions[integration].env
    if (envVars) {
      for (const [env, {message, validate, instructions}] of Object.entries(envVars)) {
        if (instructions) console.log(chalk.magentaBright(instructions))
        const selectedEnv = await input({
          message,
          validate,
          transformer: (input: string) => {
            return input.trim()
          },
        })

        integrationEnvVars[env] = selectedEnv
      }
    }
  }

  return {selectedIntegrations, integrationEnvVars}
}
