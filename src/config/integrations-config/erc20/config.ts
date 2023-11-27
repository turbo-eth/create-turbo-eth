import { dataConfigPath, exampleDemosPath } from '../../../config'
import type { IntegrationConfig } from '../../../types'

export const erc20Config: IntegrationConfig = {
  name: 'ERC20',
  pageDependencies: [
    {
      dependencyPath: dataConfigPath,
      type: 'snippet',
      regexList: [/\n\s*erc20: {\s*name: "ERC20",[\S\s]*?imgDark: "\/integrations\/erc20\.png",\s*},/g],
    },
    {
      dependencyPath: exampleDemosPath,
      type: 'snippet',
      regexList: [
        /\nimport \{\n {2}ERC20Decimals,\n {2}ERC20Name,\n {2}ERC20Symbol,\n\} from "@\/integrations\/erc20\/components\/erc20-read"/g,
        /\n\s*{\s*title: "ERC20 WAGMI",[\s\S]*?<\/Link>\s*<\/div>\s*\),\s*},/g,
      ],
    },
  ],
}
