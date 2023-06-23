import { confirm, input } from '@inquirer/prompts'
import { envVariables } from '../../config/env-variables'
import type { Context } from '../../types'
import chalk from 'chalk'

export const selectCustomEnvVariables = async ({ context }: { context: Context }) => {
  const customEnvVars: Record<string, string> = {}

  const customEnvVariables = await confirm({
    message: 'Would you like to configure the environment variables of your project?',
    default: false,
  })

  if (customEnvVariables) {
    for (const [env, { message, validate, instructions, required }] of Object.entries(envVariables)) {
      const formattedMessage =
        `${required ? '' : 'Optional: '}` +
        message +
        `${instructions ? '\n' + chalk.magentaBright(instructions) : ''}` +
        `${required ? '' : chalk.cyanBright('\n⏎ to skip')}` +
        `${!required || instructions ? '\n' : ''}`

      const envValue = await input({
        message: formattedMessage,
        validate,
        transformer: (input: string) => input.trim(),
      })

      customEnvVars[env] = envValue
    }
  }

  context.set({
    envVariables: {
      ...context.get().envVariables,
      ...customEnvVars,
    },
    integrations: context.get().integrations,
    networks: context.get().networks,
  })
}
