import type { Template, Context } from '../../types'
import { input } from '@inquirer/prompts'
import chalk from 'chalk'

export const selectTemplateEnvVariables = async ({ template, context }: { template: Template; context: Context }) => {
  const { env } = template
  if (!env) return

  const envVars: Record<string, string> = {}

  for (const [envName, { message, validate, instructions }] of Object.entries(env)) {
    if (instructions) console.log(chalk.magentaBright(instructions))
    const selectedEnv = await input({
      message,
      validate: validate ? validate : () => true,
      transformer: (input: string) => {
        return input.trim()
      },
    })

    if (selectedEnv.length > 0) envVars[envName] = selectedEnv
  }

  context.set({
    envVariables: {
      ...context.get().envVariables,
      ...envVars,
    },
    integrations: context.get().integrations,
    networks: context.get().networks,
  })
}
