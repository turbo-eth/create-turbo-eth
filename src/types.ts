export type ContextObj = {
  envVariables?: Record<string, string>
  integrations?: string[]
  networks?: {
    production: string[]
    test: string[]
  }
}

export type Context = {
  get: () => ContextObj | Record<string, never>
  set: (newCtx: ContextObj) => void
}

export type PackageManager = 'npm' | 'pnpm' | 'yarn'

type PageDependencies = {
  dependencyPath: string
  type: 'file' | 'snippet'
  regexList?: RegExp[]
}

export type AvailableProviders = 'alchemy' | 'infura' | 'public'
export type Providers = Record<AvailableProviders, Provider>
export type Provider = {
  name: string
  env: string
}

export type AvailableProdNetworks = 'mainnet' | 'optimism' | 'arbitrum' | 'polygon' | 'celo' | 'gnosis' | 'base'
export type AvailableTestNetworks =
  | 'goerli'
  | 'sepolia'
  | 'optimismGoerli'
  | 'arbitrumGoerli'
  | 'polygonMumbai'
  | 'celoAlfajores'
  | 'baseGoerli'
  | 'hardhat'
  | 'gnosisChiado'

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
  | 'erc1155'
  | 'erc721'
  | 'disco'
  | 'etherscan'
  | 'lit-protocol'
  | 'openai'
  | 'pooltogether-v4'
  | 'session-keys'
  | 'connext'
  | 'livepeer'
  | 'gelato'
  | 'push-protocol'
  | 'moralis'
  | 'aave'
  | 'arweave'
  | 'gitcoin-passport'
  | 'lens-protocol'
  | 'starter'

export type Integrations = Record<AvailableIntegrations, Integration>
export type Integration = {
  name: string
  pageDependencies?: PageDependencies[]
  env?: EnvVariables
}

export type AvailableTemplates = 'template-disco-app' | 'template-tally-app' | 'template-bank-app' | 'places' | 'turbo-slides'
export type Templates = Record<AvailableTemplates, Template>
export type Template = {
  git: string
  name: string
  description: string
  url?: string
  env?: EnvVariables
}
