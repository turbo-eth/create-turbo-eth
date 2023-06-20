
export type EnvVariable = {
  message: string
  instructions?: string
  validate: (input: string) => string | boolean
}

export type EnvVariables = Record<string, EnvVariable>

export type AvailableIntegration = 'erc20' | 'erc721' | 'disco' | 'etherscan' | 'lit-protocol' | 'openai' | 'pooltogether-v4' | 'session-keys' | 'starter'
export type Integration = {
  name: string
  pageDependencies?:Array<{
    dependencyPath: string
    type: 'file' | 'snippet'
    regexList?: RegExp[]

  }>
  env?: EnvVariables
}
export type Integrations = Record<AvailableIntegration, Integration>
