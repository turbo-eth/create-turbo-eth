import path from 'node:path'
import type { ProdNetworks, TestNetworks, AvailableTestNetworks, AvailableProdNetworks } from '../types'

export const configNetworksPath = path.join('config', 'networks.ts')

export const defaultProdNetworks: AvailableProdNetworks[] = ['mainnet']
export const defaultTestNetworks: AvailableTestNetworks[] = ['goerli']

export const prodNetworkOptions: ProdNetworks = {
  mainnet: {
    name: 'Ethereum Mainnet',
    pageDependencies: [
      {
        dependencyPath: configNetworksPath,
        type: 'snippet',
        regexList: [/\n\s*mainnet,/],
      },
    ],
    testnets: ['goerli', 'sepolia'],
  },
  optimism: {
    name: 'Optimism',
    pageDependencies: [
      {
        dependencyPath: configNetworksPath,
        type: 'snippet',
        regexList: [/\n\s*optimism,/],
      },
    ],
    testnets: ['optimismGoerli'],
  },
  arbitrum: {
    name: 'Arbitrum',
    pageDependencies: [
      {
        dependencyPath: configNetworksPath,
        type: 'snippet',
        regexList: [/\n\s*arbitrum,/],
      },
    ],
    testnets: ['arbitrumGoerli'],
  },
  polygon: {
    name: 'Polygon',
    pageDependencies: [
      {
        dependencyPath: configNetworksPath,
        type: 'snippet',
        regexList: [/\n\s*polygon,/],
      },
    ],
    testnets: ['polygonMumbai'],
  },
  celo: {
    name: 'Celo',
    pageDependencies: [
      {
        dependencyPath: configNetworksPath,
        type: 'snippet',
        regexList: [/\n\s*celo as celoNoIcon,/, /\n\s*const celo = {[\s\S]*?},?/],
      },
    ],
    testnets: ['celoAlfajores'],
  },
  gnosis: {
    name: 'Gnosis',
    pageDependencies: [
      {
        dependencyPath: configNetworksPath,
        type: 'snippet',
        regexList: [/\n\s*gnosis as gnosisNoIcon,/, /\n\s*const gnosis = {[\s\S]*?},?/],
      },
    ],
    testnets: ['gnosisChiado'],
  },
  base: {
    name: 'Base',
    pageDependencies: [
      {
        dependencyPath: configNetworksPath,
        type: 'snippet',
        regexList: [/\n\s*base as baseNoIcon,/, /\n\s*const base = {[\s\S]*?},?/],
      },
    ],
    testnets: ['baseGoerli'],
  },
}

export const testNetworkOptions: TestNetworks = {
  goerli: {
    name: 'Goerli',
    pageDependencies: [
      {
        dependencyPath: configNetworksPath,
        type: 'snippet',
        regexList: [/\n\s*goerli as goerliNoIcon,/, /\n\s*const goerli = {[\s\S]*?},?/],
      },
    ],
  },
  sepolia: {
    name: 'Sepolia',
    pageDependencies: [
      {
        dependencyPath: configNetworksPath,
        type: 'snippet',
        regexList: [/\n\s*sepolia as sepoliaNoIcon,/, /\n\s*const sepolia = {[\s\S]*?},?/],
      },
    ],
  },
  optimismGoerli: {
    name: 'Optimism Goerli',
    pageDependencies: [
      {
        dependencyPath: configNetworksPath,
        type: 'snippet',
        regexList: [/\n\s*optimismGoerli,/],
      },
    ],
  },
  arbitrumGoerli: {
    name: 'Arbitrum Goerli',
    pageDependencies: [
      {
        dependencyPath: configNetworksPath,
        type: 'snippet',
        regexList: [/\n\s*arbitrumGoerli as arbitrumGoerliNoIcon,/, /\n\s*const arbitrumGoerli = {[\s\S]*?},?/],
      },
    ],
  },
  polygonMumbai: {
    name: 'Polygon Mumbai',
    pageDependencies: [
      {
        dependencyPath: configNetworksPath,
        type: 'snippet',
        regexList: [/\n\s*polygonMumbai,/],
      },
    ],
  },
  celoAlfajores: {
    name: 'Celo Alfajores',
    pageDependencies: [
      {
        dependencyPath: configNetworksPath,
        type: 'snippet',
        regexList: [/\n\s*celoAlfajores as celoAlfajoresNoIcon,/, /\n\s*const celoAlfajores = {[\s\S]*?},?/],
      },
    ],
  },
  baseGoerli: {
    name: 'Base Goerli',
    pageDependencies: [
      {
        dependencyPath: configNetworksPath,
        type: 'snippet',
        regexList: [/\n\s*baseGoerli as baseGoerliNoIcon,/, /\n\s*const baseGoerli = {[\s\S]*?},?/],
      },
    ],
  },
  gnosisChiado: {
    name: 'Gnosis Chiado',
    pageDependencies: [
      {
        dependencyPath: configNetworksPath,
        type: 'snippet',
        regexList: [/\n\s*gnosisChiado as gnosisChiadoNoIcon,/, /\n\s*const gnosisChiado = {[\s\S]*?},?/],
      },
    ],
  },
  hardhat: {
    name: 'Hardhat',
    pageDependencies: [
      {
        dependencyPath: configNetworksPath,
        type: 'snippet',
        regexList: [/\n\s*hardhat,/],
      },
    ],
  },
}
