export type PackageManager = 'npm' | 'pnpm' | 'yarn'

type PageDependencies = {
  dependencyPath: string
  type: 'file' | 'snippet'
  regexList?: RegExp[]
}

export type AvailableProdNetworks = 'mainnet' | 'optimism' | 'arbitrum' | 'polygon' | 'celo'
export type AvailableTestNetworks =
  | 'goerli'
  | 'sepolia'
  | 'optimismGoerli'
  | 'arbitrumGoerli'
  | 'polygonMumbai'
  | 'celoAlfajores'
  | 'baseGoerli'
  | 'hardhat'

export type ProdNetworks = Record<AvailableProdNetworks, ProdNetwork>
export type TestNetworks = Record<AvailableTestNetworks, Network>

export type ProdNetwork = Network & {
  testnets?: AvailableTestNetworks[]
}

export type Network = {
  name: string
  pageDependencies?: PageDependencies[]
}

export type EnvVariables = Record<string, EnvVariable>
export type EnvVariable = {
  message: string
  instructions?: string
  validate?: (input: string) => string | boolean
  required?: boolean
}

export type AvailableIntegrations =
  | 'erc20'
  | 'erc721'
  | 'disco'
  | 'etherscan'
  | 'lit-protocol'
  | 'openai'
  | 'pooltogether-v4'
  | 'session-keys'
  | 'starter'

export type Integrations = Record<AvailableIntegrations, Integration>
export type Integration = {
  name: string
  pageDependencies?: PageDependencies[]
  env?: EnvVariables
}
