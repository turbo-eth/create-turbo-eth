import fs from 'fs-extra'
import cpy from 'cpy'
import path from 'node:path'
import {integrations as IntegrationOptions} from '../config/integrations'

export const injectIntegrations = async ({integrations, templatePath, targetPath}:
  {integrations: string[], templatePath:string, targetPath: string}) => {
  for (const [integration] of Object.entries(IntegrationOptions)) {
    if (integrations.includes(integration)) {
      await cpy(path.join(templatePath, 'integrations', integration, 'api', '**', '*'),
        path.join(targetPath, 'app', 'api'))
      await cpy(path.join(templatePath, 'integrations', integration, 'core', '**', '*'),
        path.join(targetPath, 'integrations'))
      await cpy(path.join(templatePath, 'integrations', integration, 'pages', '**', '*'),
        path.join(targetPath, 'app', '(general)', 'integration'))
    } else {
      const indexPagePath = path.join(targetPath, 'app', '(general)', 'page.tsx')
      let indexPage = fs.readFileSync(indexPagePath).toString()

      // @ts-ignore
      for (const pageRegex of IntegrationOptions[integration]?.pageRegex || []) {
        indexPage = indexPage.replace(pageRegex, '')
      }

      fs.writeFileSync(indexPagePath, indexPage)
      const dataPagePath = path.join(targetPath, 'data', 'turbo-integrations.ts')
      let dataPage = fs.readFileSync(dataPagePath).toString()
      // @ts-ignore
      for (const dataRegex of IntegrationOptions[integration]?.dataRegex || []) {
        dataPage = dataPage.replace(dataRegex, '')
      }

      fs.writeFileSync(dataPagePath, dataPage)
    }
  }
}
