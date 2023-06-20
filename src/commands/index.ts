import {Command, ux} from '@oclif/core'
import {input} from '@inquirer/prompts'
import fs from 'fs-extra'
import path from 'node:path'
import chalk from 'chalk'
import cpy from 'cpy'
import {fileURLToPath} from 'node:url'

import {bannerTitle} from '../config/data'
import {selectProviders} from '../utils/commands/select-providers'
import {injectEnvVariables} from '../utils/inject-env-variables'
import {selectCustomEnvVariables} from '../utils/commands/select-custom-env-variables'
import {selectIntegrations} from '../utils/commands/select-integrations'
import {injectIntegrations} from '../utils/inject-integrations'

interface CliResults {
  appName: string;
}

const defaultValues : CliResults = {
  appName: 'my-app',
}

export default class Core extends Command {
  async run(): Promise<void> {
    this.log(chalk.hex('#f8e06a')(bannerTitle))

    const projectName = await input({
      message: 'What will be the name of your project?',
      default: defaultValues.appName,
      transformer: (input: string) => {
        return input.trim()
      },
    })

    const {integrationEnvVars, selectedIntegrations} = await selectIntegrations()
    const {providerEnvVars} = await selectProviders()
    const {customEnvVars} = await selectCustomEnvVariables()

    ux.action.start(`${chalk.blue(`Scaffolding ${chalk.bold(projectName)}`)}`)

    const projectDir = path.resolve(process.cwd(), projectName)
    fs.mkdirSync(projectDir)
    const __dirname = fileURLToPath(new URL('.', import.meta.url))
    const templatePath = path.join(__dirname, '../..', 'template')
    await cpy(path.join(templatePath, 'base', '**', '*'), projectDir)

    injectEnvVariables({
      envVariables: {...providerEnvVars, ...customEnvVars, ...integrationEnvVars},
      targetPath: projectDir,
    })

    await injectIntegrations({
      selectedIntegrations,
      templatePath,
      targetPath: projectDir,
    })
    ux.action.stop(`${chalk.green(`Sucessfully created ${chalk.bold(projectName)}!`)}`)
  }
}
