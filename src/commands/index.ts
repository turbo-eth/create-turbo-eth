import { Command, Flags, ux } from '@oclif/core'
import { input, confirm } from '@inquirer/prompts'
import fs from 'fs-extra'
import path from 'node:path'
import chalk from 'chalk'
import { execa } from 'execa'
import cpy from 'cpy'
import degit from 'degit'
import { fileURLToPath } from 'node:url'

import { bannerTitle } from '../config'
import { getPackageManager, validateProjectName, injectEnvVariables, injectIntegrations, injectNetworks } from '../utils'
import { selectProviders, selectNetworks, selectCustomEnvVariables, selectIntegrations } from '../utils/commands'
import { templateOptions } from '../config/templates'
import type { AvailableTemplates, Context, ContextObj } from '../types'
import { selectTemplateEnvVariables } from '../utils/commands/select-template-env-variables'

interface CliResults {
  appName: string
}

const defaultValues: CliResults = {
  appName: 'my-app',
}

const context: Context = (() => {
  let ctx = {}
  const get = () => ctx
  const set = (newCtx: ContextObj) => {
    ctx = newCtx
  }

  return { get, set }
})()

export default class Core extends Command {
  static flags = {
    pnpm: Flags.boolean({ description: 'Use pnpm as the package manager' }),
    npm: Flags.boolean({ description: 'Use npm as the package manager' }),
    yarn: Flags.boolean({ description: 'Use yarn as the package manager' }),
    'skip-git': Flags.boolean({ description: 'Skip git repository initialization' }),
    'skip-install': Flags.boolean({ description: 'Skip package installation' }),
    template: Flags.string({
      description: 'Use a template to scaffold your project',
      options: Object.keys(templateOptions),
    }),
  }

  async run(): Promise<void> {
    const { flags } = await this.parse(Core)
    const packageManager = getPackageManager(flags)

    const template = flags.template ? templateOptions[flags.template as AvailableTemplates] : null

    // Skips package installation if the flag is passed
    let skipInstall = flags['skip-install']

    // Skips git initialization if the flag is passed
    let skipGit = flags['skip-git']

    this.log(chalk.hex('#f8e06a')(bannerTitle))

    const projectName = await input({
      message: 'What will be the name of your project?',
      default: defaultValues.appName,
      transformer: (input: string) => {
        return input.trim()
      },
      validate: (projectName) => validateProjectName({ projectName, projectPath: projectName }),
    })

    if (template) {
      await selectTemplateEnvVariables({ context, template })
    } else {
      // Only ask for integrations, providers, networks and env variables if no template is selected
      await selectIntegrations({ context })
      await selectProviders({ context })
      await selectCustomEnvVariables({ context })
      await selectNetworks({ context })
    }

    if (!skipInstall) {
      skipInstall = !(await confirm({
        message: 'Would you like to install the dependencies of your project?',
        default: true,
      }))
    }

    if (!skipGit) {
      skipGit = !(await confirm({
        message: 'Would you like to initialize a git repository?',
        default: true,
      }))
    }

    ux.action.start(`Scaffolding ${chalk.bold(projectName)}`)

    const projectDir = path.resolve(process.cwd(), projectName)
    const __dirname = fileURLToPath(new URL('.', import.meta.url))
    const templatePath = path.join(__dirname, '../..', 'template')

    // Create project directory
    fs.mkdirSync(projectDir)

    if (template) {
      const emitter = degit(template.git, {
        verbose: true,
      })
      await emitter.clone(projectDir)
    } else {
      // Copy base template
      await cpy(path.join(templatePath, 'base', '**', '*'), projectDir)
    }

    injectEnvVariables({
      envVariables: context.get().envVariables,
      targetPath: projectDir,
    })

    await injectIntegrations({
      selectedIntegrations: context.get().integrations,
      templatePath,
      targetPath: projectDir,
    })

    await injectNetworks({
      networks: context.get().networks,
      targetPath: projectDir,
    })

    ux.action.stop(`${chalk.green(`Sucessfully created ${chalk.bold(projectName)}!\n`)}`)

    this.log(`\nUsing ${chalk.bold(packageManager)}.\n`)
    ux.action.start('Installing packages. This might take a few minutes')

    if (!skipInstall) {
      const installArgs = ['install', packageManager === 'npm' ? '--quiet --legacy-peer-deps' : '--silent']
      try {
        await execa(packageManager, installArgs, { cwd: projectDir, env: { ...process.env, NODE_ENV: 'development' } })
      } catch (error) {
        console.error(chalk.red('Error installing packages'))
        console.error(error)
      }
    }

    ux.action.stop(`${chalk.green(`Sucessfully installed packages\n`)}`)

    if (!skipGit) {
      ux.action.start('Initializing git repository')
      await execa('git', ['init'], { cwd: projectDir })
      await execa('git', ['add', '.'], { cwd: projectDir })
      await execa('git', ['commit', '--no-verify', '-m', 'Initial commit from create-turbo-eth'], { cwd: projectDir })
      ux.action.stop(`${chalk.green(`Sucessfully created git repository\n`)}`)
    }

    this.log(chalk.green(`${chalk.bold('Next steps:')}\n  cd ${chalk.bold(projectName)}\n  ${packageManager} dev`))
  }
}
