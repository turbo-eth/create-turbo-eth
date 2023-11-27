import { dataConfigPath } from "../../../config"
import type { IntegrationConfig } from "../../../types"

export const erc1155Config: IntegrationConfig = {
  name: 'ERC1155',
  pageDependencies: [
    {
      dependencyPath: dataConfigPath,
      type: 'snippet',
      regexList: [/\n\s*erc1155: {\s*name: "ERC1155",[\S\s]*?imgDark: "\/integrations\/erc1155-icon\.png",\s*},/g],
    },
  ],
}