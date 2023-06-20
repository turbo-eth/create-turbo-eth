export const integrations = {
  erc20: {
    name: 'ERC20',
    value: 'erc20',
    dataRegex: [/\n\s*erc20: {\s*name: 'ERC20',[\S\s]*?imgDark: '\/integrations\/erc20-icon\.png',\s*},/g],
    pageRegex: [/\nimport \{ ERC20Decimals, ERC20Name, ERC20Symbol \} from '@\/integrations\/erc20\/components\/erc20-read'/g, /\n\s*{\s*title: 'ERC20 WAGMI',[\s\S]*?<\/LinkComponent>\s*<\/div>\s*\),\s*},/g],

  },
  erc721: {
    name: 'ERC721',
    value: 'erc721',
    dataRegex: [/\n\s*erc721: \{\s*name: 'ERC721',[\s\S]*?imgDark: '\/integrations\/erc721-icon.png',\s*\},/g],
    pageRegex: [/\nimport { ERC721TokenUriImage, ERC721TokenUriName } from '@\/integrations\/erc721'/g, /\n\s*{\s*title: 'ERC721 WAGMI',[\s\S]*?<\/LinkComponent>\s*<\/div>\s*\),\s*},/g],
  },
  disco: {
    name: 'Disco',
    value: 'disco',
    dataRegex: [/\n\s*disco: \{\s*name: 'Disco',[\s\S]*?imgDark: '\/integrations\/disco.jpeg',\s*\},/g],
    pageRegex: [/\n\s*{\s*title: turboIntegrations\.disco\.name,[\S\s]*?href: turboIntegrations\.disco\.href,[\S\s]*?<\/div>\s*\),\s*},/g],
  },
  etherscan: {
    name: 'Etherscan',
    value: 'etherscan',
    dataRegex: [/\n\s*etherscan: \{\s*name: 'Etherscan',[\s\S]*?imgDark: '\/integrations\/etherscan-dark.svg',\s*\},/g],
    pageRegex: [/\n\s*{\s*title: turboIntegrations\.etherscan\.name,[\s\S]*?<\/IsDarkTheme>\s*<\/div>\s*\),\s*},/g],
  },
  litProtocol: {
    name: 'Lit Protocol',
    value: 'lit-protocol',
    dataRegex: [/\n\s*litProtocol: \{\s*name: 'Lit Protocol',[\s\S]*?imgDark: '\/integrations\/lit-protocol.png',\s*\},/g],
    pageRegex: [/\n\s*{\s*title: turboIntegrations\.litProtocol\.name,[\s\S]*?<\/IsDarkTheme>\s*<\/div>\s*\),\s*},/g],
  },
  openAI: {
    name: 'OpenAI',
    value: 'openai',
    dataRegex: [/\n\s*openai: \{\s*name: 'OpenAI',[\s\S]*?imgDark: '\/integrations\/openai-dark.svg',\s*\},/g],
    pageRegex: [/\n\s*{\s*title: turboIntegrations\.openai\.name,[\s\S]*?<\/IsDarkTheme>\s*<\/div>\s*\),\s*},/g],
  },
  poolTogetherV4: {
    name: 'PoolTogether V4',
    value: 'pooltogether-v4',
    dataRegex: [/\n\s*pooltogether_v4: \{\s*name: 'PoolTogether',[\s\S]*?imgDark: '\/integrations\/pooltogether.svg',\s*\},/g],
    pageRegex: [/\n\s*{\s*title: turboIntegrations\.pooltogether_v4\.name,[\s\S]*?<\/IsDarkTheme>\s*<\/div>\s*\),\s*},/g],
  },
  sessionKeys: {
    name: 'Session Keys',
    value: 'session-keys',
    dataRegex: [/\n\s*sessionKeys: \{\s*name: 'Session Keys',[\s\S]*?imgDark: '\/integrations\/session-keys.png',\s*\},/g],
    pageRegex: [/\n\s*{\s*title: turboIntegrations\.sessionKeys\.name,[\s\S]*?<\/IsDarkTheme>\s*<\/div>\s*\),\s*},/g],
  },
  starter: {
    name: 'Starter',
    value: 'starter',
    dataRegex: [/\n\s*starter: \{\s*name: 'Starter Template',[\s\S]*?imgDark: '\/logo-dark.png',\s*\},/g],
    pageRegex: [/\n\s*{\s*title: turboIntegrations\.starter\.name,[\s\S]*?<\/IsDarkTheme>\s*<\/div>\s*\),\s*},/g],
  },
}
