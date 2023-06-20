import {Command, ux} from '@oclif/core'
import {checkbox, confirm, input} from '@inquirer/prompts'
import fs from 'fs-extra'
import path from 'node:path'
import chalk from 'chalk'
import cpy from 'cpy'
import {fileURLToPath} from 'node:url'

import {bannerTitle, prodNetworkOptions, testNetworkOptions} from '../config'
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

    // TurboETH Integrations only

    // const selectedIntegrations: string[] = await checkbox({
    //   message: 'Which integrations would you like to add?',
    //   choices: integrationOptions})

    // this.log(chalk.blue(`Selected integrations: ${chalk.bold(selectedIntegrations.join(', '))}`))

    // const isDiscoSelected = getIsDiscoSelected(selectedIntegrations)
    // const isEtherscanSelected = getIsEtherscanSelected(selectedIntegrations)
    // const isOpenAISelected = getIsOpenAISelected(selectedIntegrations)

    // if (isDiscoSelected) {
    //   this.log(chalk.magenta(`You can get your API Key at: ${chalk.bold('https://docs.disco.xyz/v2/for-developers/get-started-with-discos-api')}`))
    //   const discoAPIKey = await input({
    //     message: 'What is your Disco API Key?',

    //     transformer: (input: string) => {
    //       return input.trim()
    //     },
    //     validate: (input: string) => {
    //       if (input.trim().length === 0) {
    //         return 'Please enter a valid API Key'
    //       }

    //       return true
    //     },
    //   })
    // }

    // if (isEtherscanSelected) {
    //   this.log(chalk.magenta(`You can get your API Key at: ${chalk.bold('https://docs.etherscan.io/getting-started/viewing-api-usage-statistics')}`))
    //   const etherscanAPIKey = await input({
    //     message: 'What is your Etherscan API Key?',
    //     transformer: (input: string) => {
    //       return input.trim()
    //     },
    //     validate: (input: string) => {
    //       if (input.trim().length === 0) {
    //         return 'Please enter a valid API Key'
    //       }

    //       return true
    //     },

    //   })
    // }

    // if (isOpenAISelected) {
    //   this.log(chalk.magenta(`You can get your API Key at: ${chalk.bold('https://platform.openai.com/account/api-keys')}`))
    //   const openAIKey = await input({
    //     message: 'What is your OpenAI API Key?',
    //     transformer: (input: string) => {
    //       return input.trim()
    //     },
    //     validate: (input: string) => {
    //       if (input.trim().length === 0) {
    //         return 'Please enter a valid API Key'
    //       }

    //       return true
    //     },
    //   })
    // }

    const prodNetworks = await checkbox({
      message: 'Which chains would you like to support?',
      choices: prodNetworkOptions,
    })

    const isCustomTestnet = await confirm({
      message: 'Would you like to support custom testnet chains?',
      default: false,
    })

    if (isCustomTestnet) {
      const testnetNetworks = await checkbox({
        message: 'Which testnet chains would you like to support?',
        choices: testNetworkOptions,
      })
    }

    const integrations: string[] = await selectIntegrations()
    this.log(integrations.join(', '))
    const {providerEnvVars} = await selectProviders()
    const {customEnvVars} = await selectCustomEnvVariables()

    ux.action.start(`${chalk.blue(`Scaffolding ${chalk.bold(projectName)}`)}`)
    const projectDir = path.resolve(process.cwd(), projectName)
    // const emitter = degit('turbo-eth/template-web3-app#integrations', {
    //   verbose: true,
    // })

    fs.mkdirSync(projectDir)

    const __dirname = fileURLToPath(new URL('.', import.meta.url))
    const templatePath = path.join(__dirname, '../..', 'template')
    await cpy(path.join(templatePath, 'base', '**', '*'), projectDir)
    this.log('integrations', integrations, 'templatePath', templatePath, 'targetPath', projectDir)

    injectEnvVariables({
      envVariables: {...providerEnvVars, ...customEnvVars},
      targetPath: projectDir,
    })

    await injectIntegrations({
      integrations,
      templatePath,
      targetPath: projectDir,
    })
    ux.action.stop(`${chalk.green(`Sucessfully created ${chalk.bold(projectName)}!`)}`)
  }
}
