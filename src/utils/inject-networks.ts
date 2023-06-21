import { prodNetworkOptions, configNetworksPath, testNetworkOptions } from '../config/networks'
import type { AvailableProdNetworks, AvailableTestNetworks, Network } from '../types'
import path from 'node:path'
import fs from 'fs-extra'

// Helper function to handle dependency removal
const removeDependenciesProd = (network: AvailableProdNetworks, targetPath: string) => {
  for (const { dependencyPath, type, regexList } of prodNetworkOptions[network].pageDependencies || []) {
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

// Helper function to handle dependency removal
const removeDependenciesTest = (network: AvailableTestNetworks, targetPath: string) => {
  for (const { dependencyPath, type, regexList } of testNetworkOptions[network].pageDependencies || []) {
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

export const injectNetworks = async ({
  selectedProdNetworks,
  selectedTestNetworks,
  targetPath,
}: {
  selectedProdNetworks: string[]
  selectedTestNetworks: string[]
  targetPath: string
}) => {
  for (const [network] of Object.entries(prodNetworkOptions) as [AvailableProdNetworks, Network][]) {
    if (!selectedProdNetworks.includes(network)) {
      removeDependenciesProd(network, targetPath)
    }
  }

  for (const [network] of Object.entries(testNetworkOptions) as [AvailableTestNetworks, Network][]) {
    if (!selectedTestNetworks.includes(network)) {
      removeDependenciesTest(network, targetPath)
    }
  }

  let networksConfigData = fs.readFileSync(path.join(targetPath, configNetworksPath)).toString()
  networksConfigData = networksConfigData.replace(
    /^export\s+const\s+ETH_CHAINS_PROD\s+=\s+\[[^\]]*\]/m,
    `export const ETH_CHAINS_PROD = [${selectedProdNetworks.join(', ')}]`
  )
  networksConfigData = networksConfigData.replace(
    /^export\s+const\s+ETH_CHAINS_TEST\s+=\s+\[[^\]]*\]/m,
    `export const ETH_CHAINS_TEST = [${selectedTestNetworks.join(', ')}]`
  )
  fs.writeFileSync(path.join(targetPath, configNetworksPath), networksConfigData)

  return {
    networksConfigData,
  }
}
