import type { Integrations } from '../types'
import path from 'node:path'
import { z } from 'zod'

const indexPagePath = path.join('app', '(general)', 'page.tsx')
const dataConfigPath = path.join('data', 'turbo-integrations.ts')

export const integrationOptions: Integrations = {
  erc20: {
    name: 'ERC20',
    pageDependencies: [
      {
        dependencyPath: dataConfigPath,
        type: 'snippet',
        regexList: [/\n\s*erc20: {\s*name: 'ERC20',[\S\s]*?imgDark: '\/integrations\/erc20-icon\.png',\s*},/g],
      },
      {
        dependencyPath: indexPagePath,
        type: 'snippet',
        regexList: [
          /\nimport \{ ERC20Decimals, ERC20Name, ERC20Symbol \} from '@\/integrations\/erc20\/components\/erc20-read'/g,
          /\n\s*{\s*title: 'ERC20 WAGMI',[\s\S]*?<\/LinkComponent>\s*<\/div>\s*\),\s*},/g,
        ],
      },
    ],
  },
  erc721: {
    name: 'ERC721',
    pageDependencies: [
      {
        dependencyPath: dataConfigPath,
        type: 'snippet',
        regexList: [/\n\s*erc721: \{\s*name: 'ERC721',[\s\S]*?imgDark: '\/integrations\/erc721-icon.png',\s*\},/g],
      },
      {
        dependencyPath: indexPagePath,
        type: 'snippet',
        regexList: [
          /\nimport { ERC721TokenUriImage, ERC721TokenUriName } from '@\/integrations\/erc721'/g,
          /\n\s*{\s*title: 'ERC721 WAGMI',[\s\S]*?<\/LinkComponent>\s*<\/div>\s*\),\s*},/g,
        ],
      },
    ],
  },
  disco: {
    name: 'Disco',
    pageDependencies: [
      {
        dependencyPath: dataConfigPath,
        type: 'snippet',
        regexList: [/\n\s*disco: \{\s*name: 'Disco',[\s\S]*?imgDark: '\/integrations\/disco.jpeg',\s*\},/g],
      },
      {
        dependencyPath: indexPagePath,
        type: 'snippet',
        regexList: [/\n\s*{\s*title: turboIntegrations\.disco\.name,[\S\s]*?href: turboIntegrations\.disco\.href,[\S\s]*?<\/div>\s*\),\s*},/g],
      },
    ],
    env: {
      DISCO_API_KEY: {
        message: 'What is your Disco API Key?',
        instructions: 'You can request your Disco API Key at https://discoxyz.typeform.com/requestapi',
        validate: (input: string) => {
          if (z.string().min(1).safeParse(input).success) {
            return true
          }

          return 'Disco API Key is required'
        },
      },
    },
  },
  etherscan: {
    name: 'Etherscan',
    pageDependencies: [
      {
        dependencyPath: dataConfigPath,
        type: 'snippet',
        regexList: [/\n\s*etherscan: \{\s*name: 'Etherscan',[\s\S]*?imgDark: '\/integrations\/etherscan-dark.svg',\s*\},/g],
      },
      {
        dependencyPath: indexPagePath,
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
        regexList: [/\n\s*{\s*label: 'Transactions',[\s\S]*?},/g],
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
  },
  'lit-protocol': {
    name: 'Lit Protocol',
    pageDependencies: [
      {
        dependencyPath: dataConfigPath,
        type: 'snippet',
        regexList: [/\n\s*litProtocol: \{\s*name: 'Lit Protocol',[\s\S]*?imgDark: '\/integrations\/lit-protocol.png',\s*\},/g],
      },
      {
        dependencyPath: indexPagePath,
        type: 'snippet',
        regexList: [/\n\s*{\s*title: turboIntegrations\.litProtocol\.name,[\s\S]*?<\/IsDarkTheme>\s*<\/div>\s*\),\s*},/g],
      },
    ],
  },
  openai: {
    name: 'OpenAI',
    pageDependencies: [
      {
        dependencyPath: dataConfigPath,
        type: 'snippet',
        regexList: [/\n\s*openai: \{\s*name: 'OpenAI',[\s\S]*?imgDark: '\/integrations\/openai-dark.svg',\s*\},/g],
      },
      {
        dependencyPath: indexPagePath,
        type: 'snippet',
        regexList: [/\n\s*{\s*title: turboIntegrations\.openai\.name,[\s\S]*?<\/IsDarkTheme>\s*<\/div>\s*\),\s*},/g],
      },
    ],
    env: {
      OPENAI_API_KEY: {
        message: 'What is your OpenAI API Key?',
        instructions: 'You can get your OpenAI API Key at https://platform.openai.com/account/api-keys',
        validate: (input: string) => {
          if (z.string().min(1).safeParse(input).success) {
            return true
          }

          return 'OpenAI API Key is required'
        },
      },
    },
  },
  'pooltogether-v4': {
    name: 'PoolTogether V4',
    pageDependencies: [
      {
        dependencyPath: dataConfigPath,
        type: 'snippet',
        regexList: [/\n\s*pooltogether_v4: \{\s*name: 'PoolTogether',[\s\S]*?imgDark: '\/integrations\/pooltogether.svg',\s*\},/g],
      },
      {
        dependencyPath: indexPagePath,
        type: 'snippet',
        regexList: [/\n\s*{\s*title: turboIntegrations\.pooltogether_v4\.name,[\s\S]*?<\/IsDarkTheme>\s*<\/div>\s*\),\s*},/g],
      },
    ],
  },
  'session-keys': {
    name: 'Session Keys',
    pageDependencies: [
      {
        dependencyPath: dataConfigPath,
        type: 'snippet',
        regexList: [/\n\s*sessionKeys: \{\s*name: 'Session Keys',[\s\S]*?imgDark: '\/integrations\/session-keys.png',\s*\},/g],
      },
      {
        dependencyPath: indexPagePath,
        type: 'snippet',
        regexList: [/\n\s*{\s*title: turboIntegrations\.sessionKeys\.name,[\s\S]*?<\/IsDarkTheme>\s*<\/div>\s*\),\s*},/g],
      },
    ],
  },
  connext: {
    name: 'Connext',
    pageDependencies: [
      {
        dependencyPath: dataConfigPath,
        type: 'snippet',
        regexList: [/\n\s*connext: \{\s*name: 'Connext',[\s\S]*?imgDark: '\/integrations\/connext.png',\s*\},/g],
      },
      {
        dependencyPath: indexPagePath,
        type: 'snippet',
        regexList: [/\n\s*{\s*title: turboIntegrations\.connext\.name,[\s\S]*?<\/IsDarkTheme>\s*<\/div>\s*\),\s*},/g],
      },
    ],
  },
  starter: {
    name: 'Starter',
    pageDependencies: [
      {
        dependencyPath: dataConfigPath,
        type: 'snippet',
        regexList: [/\n\s*starter: \{\s*name: 'Starter Template',[\s\S]*?imgDark: '\/logo-dark.png',\s*\},/g],
      },
      {
        dependencyPath: indexPagePath,
        type: 'snippet',
        regexList: [/\n\s*{\s*title: turboIntegrations\.starter\.name,[\s\S]*?<\/IsDarkTheme>\s*<\/div>\s*\),\s*},/g],
      },
    ],
  },
}
