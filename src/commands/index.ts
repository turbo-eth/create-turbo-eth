import { Command, Flags, ux } from '@oclif/core'
import { input, confirm } from '@inquirer/prompts'
import fs from 'fs-extra'
import path from 'node:path'
import chalk from 'chalk'
import { execa } from 'execa'
import cpy from 'cpy'
import { fileURLToPath } from 'node:url'

import { bannerTitle } from '../config'
import { getPackageManager, validateProjectName, injectEnvVariables, injectIntegrations, injectNetworks } from '../utils'
import { selectProviders, selectNetworks, selectCustomEnvVariables, selectIntegrations } from '../utils/commands'

interface CliResults {
  appName: string
}

const defaultValues: CliResults = {
  appName: 'my-app',
}

export default class Core extends Command {
  static flags = {
    pnpm: Flags.boolean({ description: 'Use pnpm as package manager' }),
    npm: Flags.boolean({ description: 'Use npm as package manager' }),
    yarn: Flags.boolean({ description: 'Use yarn as package manager' }),
    skipGit: Flags.boolean({ description: 'Skip git initialization' }),
  }

  async run(): Promise<void> {
    const { flags } = await this.parse(Core)
    const packageManager = getPackageManager(flags)
    let skipGit = flags.skipGit

    this.log(chalk.hex('#f8e06a')(bannerTitle))

    const projectName = await input({
      message: 'What will be the name of your project?',
      default: defaultValues.appName,
      transformer: (input: string) => {
        return input.trim()
      },
      validate: (projectName) => validateProjectName({ projectName, projectPath: projectName }),
    })

    const { integrationEnvVars, selectedIntegrations } = await selectIntegrations()
    const { providerEnvVars } = await selectProviders()
    const { customEnvVars } = await selectCustomEnvVariables()
    const { selectedProdNetworks, selectedTestNetworks } = await selectNetworks()

    if (!skipGit) {
      skipGit = !(await confirm({
        message: 'Would you like to initialize a git repository?',
        default: true,
      }))
    }

    ux.action.start(`Scaffolding ${chalk.bold(projectName)}`)

    const projectDir = path.resolve(process.cwd(), projectName)
    fs.mkdirSync(projectDir)
    const __dirname = fileURLToPath(new URL('.', import.meta.url))
    const templatePath = path.join(__dirname, '../..', 'template')
    await cpy(path.join(templatePath, 'base', '**', '*'), projectDir)

    injectEnvVariables({
      envVariables: { ...providerEnvVars, ...customEnvVars, ...integrationEnvVars },
      targetPath: projectDir,
    })

    await injectIntegrations({
      selectedIntegrations,
      templatePath,
      targetPath: projectDir,
    })

    await injectNetworks({
      selectedProdNetworks,
      selectedTestNetworks,
      targetPath: projectDir,
    })

    ux.action.stop(`${chalk.green(`Sucessfully created ${chalk.bold(projectName)}!\n`)}`)

    this.log(`\nUsing ${chalk.bold(packageManager)}.\n`)
    ux.action.start('Installing packages. This might take a few minutes')

    const installArgs = ['install', packageManager === 'npm' ? '--quiet' : '--silent']
    try {
      await execa(packageManager, installArgs, { cwd: projectDir, env: { ...process.env, NODE_ENV: 'development' } })
    } catch (error) {
      console.error(chalk.red('Error installing packages'))
      console.error(error)
    }

    ux.action.stop(`${chalk.green(`Sucessfully installed packages\n`)}`)

    if (!skipGit) {
      ux.action.start('Initializing git repository')
      await execa('git', ['init'], { cwd: projectDir })
      await execa('git', ['add', '.'], { cwd: projectDir })
      await execa('git', ['commit', '--no-verify', '-m', 'Initial commit from turbo-eth-cli'], { cwd: projectDir })
      ux.action.stop(`${chalk.green(`Sucessfully created git repository\n`)}`)
    }

    this.log(chalk.green(`${chalk.bold('Next steps:')}\n  cd chalk.bold(${projectName})\n  pnpm dev`))
  }
}
