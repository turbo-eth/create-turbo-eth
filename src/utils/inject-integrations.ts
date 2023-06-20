import fs from 'fs-extra'
import cpy from 'cpy'
import path from 'node:path'
import {integrationOptions} from '../config/integrations'
import type {Integration, AvailableIntegration} from '../types'

// Helper function to handle copying files
const copyFiles = async (integration: AvailableIntegration, templatePath: string, targetPath: string)  => {
  await Promise.all([
    cpy(path.join(templatePath, 'integrations', integration, 'api', '**', '*'), path.join(targetPath, 'app', 'api')),
    cpy(path.join(templatePath, 'integrations', integration, 'core', '**', '*'), path.join(targetPath, 'integrations')),
    cpy(path.join(templatePath, 'integrations', integration, 'pages', '**', '*'), path.join(targetPath, 'app', '(general)', 'integration')),
  ])
}

// Helper function to handle dependency removal
const removeDependencies = (integration: AvailableIntegration, targetPath: string) => {
  for (const {dependencyPath, type, regexList} of integrationOptions[integration].pageDependencies || []) {
    const fullDependencyPath = path.join(targetPath, dependencyPath)

    if (type === 'file' || !regexList) {
      fs.removeSync(fullDependencyPath)
    } else {
      let pageData = fs.readFileSync(fullDependencyPath).toString()
      for (const regex of regexList) {
        pageData = pageData.replace(regex, '')
      }

      fs.writeFileSync(fullDependencyPath, pageData)
    }
  }
}

export const injectIntegrations = async ({
  selectedIntegrations, templatePath, targetPath,
}: { selectedIntegrations: string[], templatePath: string, targetPath: string }) => {
  for (const [integration] of Object.entries(integrationOptions) as [AvailableIntegration, Integration][]) {
    if (selectedIntegrations.includes(integration)) {
      await copyFiles(integration, templatePath, targetPath)
    } else {
      removeDependencies(integration, targetPath)
    }
  }
}
