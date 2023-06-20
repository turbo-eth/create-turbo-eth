import {confirm, input} from '@inquirer/prompts'
import {envVariables} from '../../config/env-variables'

export const selectCustomEnvVariables = async () => {
  const customEnvVars:Record<string, string> = {}

  const customEnvVariables = await confirm({
    message: 'Would you like to configure the environment variables of your project?',
    default: false,
  })

  if (customEnvVariables) {
    for (const envVariableName in envVariables) {
      // @ts-ignore
      const {env, message, validate} = envVariables[envVariableName]
      // @ts-ignore
      const envValue = await input({
        message,
        validate,
      })

      customEnvVars[env] = envValue
    }
  }

  return {
    customEnvVars,
  }
}
