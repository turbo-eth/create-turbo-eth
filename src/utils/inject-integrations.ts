import cpy from 'cpy'
import fs from 'fs-extra'
import path from 'node:path'
import { integrationOptions } from '../config/integrations'
import type { AvailableIntegrations, IntegrationConfig } from '../types'

// Helper function to handle copying files
const copyFiles = async (integration: AvailableIntegrations, templatePath: string, targetPath: string) => {
  await Promise.all([
    cpy(path.join(templatePath, 'integrations', integration, 'api', '**', '*'), path.join(targetPath, 'app', 'api')),
    cpy(path.join(templatePath, 'integrations', integration, 'core', '**', '*'), path.join(targetPath, 'integrations')),
    cpy(path.join(templatePath, 'integrations', integration, 'pages', '**', '*'), path.join(targetPath, 'app', '(general)', 'integration')),
  ])
}

// Helper function to handle integration removal
const removeIntegration = (integration: AvailableIntegrations, targetPath: string) => {
  for (const { dependencyPath, type, regexList } of integrationOptions[integration].pageDependencies || []) {
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

const injectDependencies = async (integrationConfig: IntegrationConfig, targetPath: string) => {
  const dependencies = integrationConfig?.dependencies
  if (!dependencies) return

  fs.writeJSONSync(
    path.join(targetPath, 'package.json'),
    {
      ...fs.readJSONSync(path.join(targetPath, 'package.json')),
      dependencies: {
        ...fs.readJSONSync(path.join(targetPath, 'package.json')).dependencies,
        ...dependencies,
      },
    },
    { spaces: 2 }
  )
}

export const injectIntegrations = async ({
  selectedIntegrations,
  templatePath,
  targetPath,
}: {
  selectedIntegrations?: string[]
  templatePath: string
  targetPath: string
}) => {
  if (!selectedIntegrations) return
  for (const [integration] of Object.entries(integrationOptions) as [AvailableIntegrations, IntegrationConfig][]) {
    if (selectedIntegrations.includes(integration)) {
      await copyFiles(integration, templatePath, targetPath)
      await injectDependencies(integrationOptions[integration], targetPath)
    } else {
      removeIntegration(integration, targetPath)
    }
  }
}
