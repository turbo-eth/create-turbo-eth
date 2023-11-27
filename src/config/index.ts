import chalk from 'chalk'
import path from 'node:path'

export const bannerTitle =
  '\n\n$$$$$$$$\\                  $$\\                 $$$$$$$$\\ $$$$$$$$\\ $$\\   $$\\ \n' +
  '\\__$$  __|                 $$ |                $$  _____|\\__$$  __|$$ |  $$ |\n' +
  '   $$ |$$\\   $$\\  $$$$$$\\  $$$$$$$\\   $$$$$$\\  $$ |         $$ |   $$ |  $$ |\n' +
  '   $$ |$$ |  $$ |$$  __$$\\ $$  __$$\\ $$  __$$\\ $$$$$\\       $$ |   $$$$$$$$ |\n' +
  '   $$ |$$ |  $$ |$$ |  \\__|$$ |  $$ |$$ /  $$ |$$  __|      $$ |   $$  __$$ |\n' +
  '   $$ |$$ |  $$ |$$ |      $$ |  $$ |$$ |  $$ |$$ |         $$ |   $$ |  $$ |\n' +
  '   $$ |\\$$$$$$  |$$ |      $$$$$$$  |\\$$$$$$  |$$$$$$$$\\    $$ |   $$ |  $$ |\n' +
  '   \\__| \\______/ \\__|      \\_______/  \\______/ \\________|   \\__|   \\__|  \\__|\n\n' +
  `\nWelcome to ${chalk.hex('#f8e06a')('TurboETH CLI')} - The fastest way to create Web3 apps.\n`

export const exampleDemosPath = path.join('components', 'shared', 'example-demos.tsx')
export const dataConfigPath = path.join('data', 'turbo-integrations.ts')
