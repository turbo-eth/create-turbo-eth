import {confirm, input} from '@inquirer/prompts'
import {envVariables} from '../../config/env-variables'
import chalk from 'chalk'
export const selectCustomEnvVariables = async () => {
  const customEnvVars:Record<string, string> = {}

  const customEnvVariables = await confirm({
    message: 'Would you like to configure the environment variables of your project?',
    default: false,
  })

  if (customEnvVariables) {
    for (const [env, {message, validate, instructions}] of Object.entries(envVariables)) {
      if (instructions) console.log(chalk.magentaBright(instructions))
      const envValue = await input({
        message,
        validate,
        transformer: (input: string) => input.trim(),
      })

      customEnvVars[env] = envValue
    }
  }

  return {
    customEnvVars,
  }
}
