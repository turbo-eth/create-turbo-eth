import { dataConfigPath, exampleDemosPath } from "../../../config"
import type { IntegrationConfig } from "../../../types"

export const erc721Config: IntegrationConfig = {
  name: 'ERC721',
  pageDependencies: [
    {
      dependencyPath: dataConfigPath,
      type: 'snippet',
      regexList: [/\n\s*erc721: \{\s*name: "ERC721",[\s\S]*?imgDark: "\/integrations\/erc721-icon.png",\s*\},/g],
    },
    {
      dependencyPath: exampleDemosPath,
      type: 'snippet',
      regexList: [
        /\nimport { ERC721TokenUriImage, ERC721TokenUriName } from "@\/integrations\/erc721"/g,
        /\n\s*{\s*title: "ERC721 WAGMI",[\s\S]*?<\/Link>\s*<\/div>\s*\),\s*},/g,
      ],
    },
  ],
}