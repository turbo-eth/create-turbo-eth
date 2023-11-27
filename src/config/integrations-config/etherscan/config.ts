import path from 'node:path'
import { dataConfigPath, exampleDemosPath } from '../../../config'
import type { IntegrationConfig } from '../../../types'

export const etherscanConfig: IntegrationConfig = {
  name: 'Etherscan',
  pageDependencies: [
    {
      dependencyPath: dataConfigPath,
      type: 'snippet',
      regexList: [/\n\s*etherscan: \{\s*name: "Etherscan",[\s\S]*?imgDark: "\/integrations\/etherscan-dark.svg",\s*\},/g],
    },
    {
      dependencyPath: exampleDemosPath,
      type: 'snippet',
      regexList: [/\n\s*{\s*title: turboIntegrations\.etherscan\.name,[\s\S]*?<\/IsDarkTheme>\s*<\/div>\s*\),\s*},/g],
    },
    {
      dependencyPath: path.join('app', 'dashboard', 'transactions'),
      type: 'file',
    },
    {
      dependencyPath: path.join('config', 'menu-dashboard.ts'),
      type: 'snippet',
      regexList: [/\n\s*{\s*label: "Transactions",[\s\S]*?},/g],
    },
  ],
  // Don't require Etherscan API keys since they are not required to make API requests
  env: {
    ETHERSCAN_API_KEY: {
      message: 'What is your Etherscan API Key?',
      instructions: 'You can get your Etherscan API Key at https://etherscan.io/myapikey',
    },
    ETHERSCAN_API_KEY_OPTIMISM: {
      message: 'What is your Optimism Etherscan API Key?',
      instructions: 'You can get your Optimism Etherscan API Key at https://optimistic.etherscan.io/myapikey',
    },
    ETHERSCAN_API_KEY_ARBITRUM: {
      message: 'What is your Arbitrum Etherscan API Key?',
      instructions: 'You can get your Arbitrum Etherscan API Key at https://arbiscan.io/myapikey',
    },
    ETHERSCAN_API_KEY_POLYGON: {
      message: 'What is your Polygon Etherscan API Key?',
      instructions: 'You can get your Polygon Etherscan API Key at https://polygonscan.com/myapikey',
    },
  },
}
