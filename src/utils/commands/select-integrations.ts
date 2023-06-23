import chalk from 'chalk'
import { checkbox, input } from '@inquirer/prompts'
import { integrationOptions } from '../../config/integrations'
import type { AvailableIntegrations, Context } from '../../types'

export const selectIntegrations = async ({ context }: { context: Context }) => {
  const integrationEnvVars: Record<string, string> = {}

  const selectedIntegrations: string[] = await checkbox({
    message: 'Which integrations would you like to add?',
    choices: Object.entries(integrationOptions).map(([value, { name }]) => ({
      name,
      value,
    })),
  })

  for (const integration of selectedIntegrations as AvailableIntegrations[]) {
    const envVars = integrationOptions[integration].env
    if (envVars) {
      for (const [env, { message, validate, instructions }] of Object.entries(envVars)) {
        if (instructions) console.log(chalk.magentaBright(instructions))
        const selectedEnv = await input({
          message,
          validate: validate ? validate : () => true,
          transformer: (input: string) => {
            return input.trim()
          },
        })

        if (selectedEnv.length > 0) integrationEnvVars[env] = selectedEnv
      }
    }
  }

  context.set({
    envVariables: {
      ...context.get().envVariables,
      ...integrationEnvVars,
    },
    integrations: selectedIntegrations,
    networks: context.get().networks,
  })
}
